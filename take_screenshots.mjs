import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SS = path.join(__dirname, 'Informe', 'assets', 'images', 'screenshots');
const BASE = 'https://cafeteria-5.duckdns.org';

const CREDS = {
  admin:   { email: 'admin@admin.com',   password: 'admin'   },
  barista: { email: 'barista@gmail.com', password: 'barista' },
  cajero:  { email: 'cajero@gmail.com',  password: 'cajero'  },
};

async function getAuthCookie(email, password) {
  const res = await fetch(`${BASE}/api/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const raw = res.headers.get('set-cookie') || '';
  const body = await res.json();
  if (!body.success) throw new Error(`Login failed for ${email}`);
  const match = raw.match(/^([^=]+)=([^;]+)/);
  return match ? { name: match[1], value: match[2] } : { name: 'accessToken', value: '' };
}

async function makeCtx(browser, cookie) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await ctx.addCookies([{
    name: cookie.name, value: cookie.value,
    domain: 'cafeteria-5.duckdns.org', path: '/',
    secure: true, httpOnly: false, sameSite: 'None',
  }]);
  return ctx;
}

async function ss(page, filename, wait = 2000) {
  await page.waitForTimeout(wait);
  await page.screenshot({ path: path.join(SS, filename), fullPage: false });
  console.log(`  ✓ ${filename}`);
}

async function goHome(page) {
  await page.goto(`${BASE}/home`, { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForTimeout(2000);
}

async function clickTab(page, texts) {
  for (const t of texts) {
    try {
      // Use JS click to bypass visibility issues
      const found = await page.evaluate((text) => {
        const els = Array.from(document.querySelectorAll('button, a'));
        const el = els.find(e => e.textContent.trim().includes(text));
        if (el) { el.click(); return true; }
        return false;
      }, t);
      if (found) { await page.waitForTimeout(1500); return true; }
    } catch {}
  }
  return false;
}

async function main() {
  const browser = await chromium.launch({ headless: true });

  // ─── 1. LOGIN ──────────────────────────────────────────────────
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(`${BASE}/auth`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await ss(page, 'login.png', 2500);
    await ctx.close();
  }

  // ─── 2. ADMIN ──────────────────────────────────────────────────
  console.log('[Admin]');
  {
    const ctx = await makeCtx(browser, await getAuthCookie(CREDS.admin.email, CREDS.admin.password));
    const page = await ctx.newPage();

    await goHome(page);
    await ss(page, 'dashboard_admin.png', 1000);

    for (const [tab, file] of [
      [['Mesas'], 'panel_mesas.png'],
      [['Categorías', 'Categorias'], 'categorias.png'],
      [['Productos'], 'productos.png'],
      [['Empleados'], 'empleados.png'],
      [['WhatsApp'], 'whatsapp_panel.png'],
      [['Groq'], 'chatbot_groq.png'],
    ]) {
      await goHome(page);
      await clickTab(page, tab);
      await ss(page, file);
    }

    await page.goto(`${BASE}/insumos`, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await ss(page, 'inventario.png');

    await page.goto(`${BASE}/orders`, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await ss(page, 'ordenes_admin.png');

    await ctx.close();
  }

  // ─── 3. CAJERO ─────────────────────────────────────────────────
  console.log('[Cajero]');
  {
    const ctx = await makeCtx(browser, await getAuthCookie(CREDS.cajero.email, CREDS.cajero.password));
    const page = await ctx.newPage();

    // POS home
    await goHome(page);
    await ss(page, 'pos_orden.png', 2000);

    // Add items to cart for a better POS screenshot
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const cafe = btns.find(b => b.textContent.includes('Café'));
      if (cafe) cafe.click();
    });
    await page.waitForTimeout(1500);
    // Click + on first two products
    const plusBtns = page.locator('button:has-text("+")');
    const count = await plusBtns.count();
    if (count > 0) {
      await plusBtns.nth(0).click().catch(() => {});
      await page.waitForTimeout(300);
      await plusBtns.nth(0).click().catch(() => {});
    }
    // Set customer name
    await page.locator('input[placeholder*="cliente" i], input[placeholder*="nombre" i]').first().fill('Juan García').catch(() => {});
    await ss(page, 'pos_orden_con_items.png', 1500);

    // Cajero orders page
    await page.goto(`${BASE}/orders`, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000);
    if (!page.url().includes('/auth')) {
      await ss(page, 'cajero_orders.png');

      // Try to open an order and find payment
      const orderEl = page.locator('tbody tr').first();
      if (await orderEl.count() > 0) {
        await orderEl.click().catch(() => {});
        await page.waitForTimeout(2000);
        await ss(page, 'pago_qr.png', 2000);
      }
    }

    // Try Pedido tab via JS click
    await goHome(page);
    const clickedPedido = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      // Find bottom nav button - try different text matches
      const pedido = btns.find(b => {
        const t = b.textContent.trim();
        return t === 'Pedido' || t === 'Pedidos' || t.includes('Pedido');
      });
      if (pedido) {
        pedido.scrollIntoView();
        pedido.click();
        return pedido.textContent.trim();
      }
      return null;
    });
    console.log('  Clicked pedido tab:', clickedPedido);
    await page.waitForTimeout(2000);
    console.log('  URL after pedido click:', page.url());
    await ss(page, 'cajero_pedido_tab.png');

    await ctx.close();
  }

  // ─── 4. BARISTA ────────────────────────────────────────────────
  console.log('[Barista]');
  {
    const ctx = await makeCtx(browser, await getAuthCookie(CREDS.barista.email, CREDS.barista.password));
    const page = await ctx.newPage();

    await page.goto(`${BASE}/home`, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(3000);
    console.log('  URL:', page.url());
    await ss(page, 'kds_cocina.png', 2000);

    await ctx.close();
  }

  // ─── 5. Orquestador :8500 ──────────────────────────────────────
  console.log('[Orquestador]');
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    try {
      await page.goto(`${BASE}:8500`, { waitUntil: 'domcontentloaded', timeout: 8000 });
      await page.waitForTimeout(2000);
      await ss(page, 'orquestador_qr.png', 1500);
      console.log('  Orquestador captured at :8500');
    } catch {
      console.log('  Orquestador :8500 not available');
    }
    await ctx.close();
  }

  await browser.close();

  // Summary
  const files = fs.readdirSync(SS);
  console.log('\nAll screenshots:');
  files.forEach(f => console.log(`  ${f}`));
  console.log('\n=== DONE ===');
}

main().catch(console.error);
