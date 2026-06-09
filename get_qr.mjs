import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SS = path.join(__dirname, 'Informe', 'assets', 'images', 'screenshots');
const BASE = 'https://cafeteria-5.duckdns.org';

async function getCookie(email, password) {
  const res = await fetch(`${BASE}/api/user/login`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const raw = res.headers.get('set-cookie') || '';
  const body = await res.json();
  console.log(`Login ${email}: ${res.status}`, body.success ? 'OK' : body.message);
  if (!body.success) throw new Error(`Login failed: ${body.message}`);
  const match = raw.match(/^([^=]+)=([^;]+)/);
  return match ? { name: match[1], value: match[2] } : { name: 'accessToken', value: '' };
}

async function makeCtx(browser, cookie) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await ctx.addCookies([{
    name: cookie.name, value: cookie.value,
    domain: 'cafeteria-5.duckdns.org', path: '/',
    secure: true, httpOnly: true, sameSite: 'None',
  }]);
  return ctx;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const cajeroCookie = await getCookie('cajero@gmail.com', 'cajero');
  const ctx = await makeCtx(browser, cajeroCookie);
  const page = await ctx.newPage();

  // Capture QR API response
  let qrApiData = null;
  page.on('response', async resp => {
    if (resp.url().includes('/api/payment/qr')) {
      try { qrApiData = await resp.json(); console.log('QR API:', JSON.stringify(qrApiData).slice(0, 400)); }
      catch {}
    }
  });

  await page.goto(`${BASE}/home`, { waitUntil: 'networkidle', timeout: 30000 });
  console.log('URL:', page.url());

  // 1. Fill customer name in the 2nd input
  await page.evaluate(() => {
    const inputs = document.querySelectorAll('input');
    const nameInput = inputs[1]; // "Nombre del cliente nuevo"
    if (nameInput) {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      setter.call(nameInput, 'Juan Perez');
      nameInput.dispatchEvent(new Event('input', { bubbles: true }));
      nameInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
  await page.waitForTimeout(300);

  // 2. Confirm customer
  await page.evaluate(() =>
    Array.from(document.querySelectorAll('button'))
      .find(b => b.textContent.includes('Confirmar cliente'))?.click()
  );
  await page.waitForTimeout(1500);
  console.log('Customer confirmed');

  // 3. Click + on product 1 (first + button)
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const firstPlus = btns.find(b => b.textContent.trim() === '+');
    if (firstPlus) firstPlus.click();
  });
  await page.waitForTimeout(600);

  // 4. Click the cart icon that follows the first + button (using coordinates)
  // Get the position of the cart icon button next to the first product with qty>0
  const cartIconPos = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    let firstPlusIdx = -1;
    for (let i = 0; i < btns.length; i++) {
      if (btns[i].textContent.trim() === '+') { firstPlusIdx = i; break; }
    }
    if (firstPlusIdx >= 0 && firstPlusIdx + 1 < btns.length) {
      const cartBtn = btns[firstPlusIdx + 1]; // Next button after first + is the cart icon
      const rect = cartBtn.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, text: cartBtn.textContent.trim() };
    }
    return null;
  });
  console.log('Cart icon position:', cartIconPos);

  if (cartIconPos) {
    // Use real mouse click with Playwright
    await page.mouse.click(cartIconPos.x, cartIconPos.y);
    console.log('Clicked cart icon via mouse');
  }
  await page.waitForTimeout(800);

  // Verify cart
  const cartState = await page.evaluate(() => {
    const txt = document.body.textContent.replace(/\s+/g, ' ');
    return {
      hasItems: txt.includes('Subtotal (1'),
      snippet: txt.slice(200, 500),
    };
  });
  console.log('Cart state:', cartState.hasItems ? 'HAS ITEMS ✓' : 'EMPTY ✗');
  if (!cartState.hasItems) console.log('Cart snippet:', cartState.snippet);

  await page.screenshot({ path: path.join(SS, '_pos_pre_order.png') });
  console.log('  ✓ _pos_pre_order.png');

  // 5. Select Mercantil
  await page.evaluate(() =>
    Array.from(document.querySelectorAll('button'))
      .find(b => b.textContent.includes('Mercantil'))?.click()
  );
  await page.waitForTimeout(500);

  // 6. Click order button
  const orderBtn = await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button'))
      .find(b => b.textContent.includes('Realizar') || b.textContent.includes('Enviar a Cocina'));
    if (btn) { btn.click(); return btn.textContent.trim(); }
    return null;
  });
  console.log('Order button:', orderBtn);

  // Capture state right after click (within 1s)
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(SS, '_qr_t1s.png') });
  console.log('  ✓ _qr_t1s.png');

  // Poll every 2 seconds
  let saved = false;
  for (let i = 0; i < 60 && !saved; i++) {
    await page.waitForTimeout(2000);
    const t = (i + 1) * 2 + 1;

    const state = await page.evaluate(() => {
      const txt = document.body.textContent;
      const html = document.body.innerHTML;
      const genMatch = txt.match(/Generando QR[^\d]*(\d+)s/);
      const hasQR = html.includes('data:image') || !!document.querySelector('canvas')
        || html.toLowerCase().includes('qrcode');
      return {
        generating: genMatch?.[0] || null,
        timer: genMatch ? parseInt(genMatch[1]) : null,
        hasQR,
        isMercantilPage: html.includes('Mercantil') && !html.includes('MÉTODO DE PAGO'),
      };
    });

    if (state.generating) {
      console.log(`  [${t}s] ${state.generating}`);
      // Take screenshot every 10s during countdown
      if (t % 10 < 2) {
        await page.screenshot({ path: path.join(SS, `_qr_t${t}s.png`) });
        console.log(`  ✓ _qr_t${t}s.png`);
      }
    } else if (state.hasQR) {
      await page.screenshot({ path: path.join(SS, 'pago_qr.png') });
      console.log(`  [${t}s] QR detected → pago_qr.png saved!`);
      saved = true;
    } else {
      // QR generation stopped — capture whatever is shown
      await page.screenshot({ path: path.join(SS, `_qr_state_${t}s.png`) });
      const txt = await page.evaluate(() => document.body.textContent.replace(/\s+/g, ' ').slice(0, 200));
      console.log(`  [${t}s] State changed:`, txt.slice(0, 100));
      // If page has MSC Mercantil section (payment page), save as pago_qr
      if (state.isMercantilPage) {
        await page.screenshot({ path: path.join(SS, 'pago_qr.png') });
        console.log('>>> pago_qr.png saved (Mercantil payment page)!');
        saved = true;
      }
      break;
    }
  }

  if (!saved) {
    await page.screenshot({ path: path.join(SS, '_qr_timeout.png') });
    console.log('Timed out. Check _qr_countdown screenshots.');
    if (qrApiData) console.log('QR API data:', JSON.stringify(qrApiData));
  }

  await ctx.close();
  await browser.close();
}

main().catch(console.error);
