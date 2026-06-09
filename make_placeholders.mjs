import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SS = path.join(__dirname, 'Informe', 'assets', 'images', 'screenshots');

const placeholders = [
  {
    file: 'pago_qr.png',
    title: 'Pago QR Bancario',
    subtitle: 'Módulo de pago QR — código QR bancario boliviano generado\ncon cronómetro de expiración y estado en tiempo real',
    hint: 'Flujo: Cajero crea orden con método "MSC Mercantil" → aparece QR con cuenta regresiva',
  },
  {
    file: 'orquestador_qr.png',
    title: 'Panel del Orquestador Django',
    subtitle: 'Panel web del orquestador Django (:8500) —\nhistorial de pagos QR con estado, proveedor bancario y monto',
    hint: 'Acceder a: https://cafeteria-5.duckdns.org:8500  (o IP del servidor)',
  },
  {
    file: 'whatsapp_notificacion.png',
    title: 'Notificación WhatsApp al Cliente',
    subtitle: 'Notificación WhatsApp al cliente — imagen del QR de pago\ncon monto, banco y tiempo estimado de expiración',
    hint: 'Captura de pantalla del teléfono móvil que recibe el WhatsApp',
  },
  {
    file: 'github_actions.png',
    title: 'Pipeline CI/CD — GitHub Actions',
    subtitle: 'Pipeline de despliegue en GitHub Actions —\npasos de build, rsync y reinicio PM2 en servidor Oracle Cloud',
    hint: 'Repositorio en GitHub → pestaña Actions → último workflow exitoso',
  },
];

const html = (p) => `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1440px; height: 900px;
    background: #1a1a2e;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', Arial, sans-serif;
  }
  .card {
    background: #16213e;
    border: 2px dashed #e07c2a;
    border-radius: 16px;
    padding: 60px 80px;
    max-width: 900px;
    text-align: center;
  }
  .badge {
    display: inline-block;
    background: #e07c2a;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 6px 18px;
    border-radius: 20px;
    margin-bottom: 28px;
  }
  h1 { color: #f4a84a; font-size: 38px; font-weight: 700; margin-bottom: 20px; line-height: 1.2; }
  .sub { color: #a0aec0; font-size: 18px; line-height: 1.7; margin-bottom: 36px; white-space: pre-line; }
  .hint {
    background: #0f3460;
    border-radius: 10px;
    padding: 16px 24px;
    color: #63b3ed;
    font-size: 15px;
    line-height: 1.6;
  }
  .hint strong { color: #90cdf4; }
</style>
</head>
<body>
<div class="card">
  <div class="badge">REEMPLAZAR CON CAPTURA REAL</div>
  <h1>${p.title}</h1>
  <p class="sub">${p.subtitle}</p>
  <div class="hint"><strong>Cómo obtener esta captura:</strong><br>${p.hint}</div>
</div>
</body>
</html>`;

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();

  for (const p of placeholders) {
    await page.setContent(html(p), { waitUntil: 'load' });
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(SS, p.file) });
    console.log(`✓ ${p.file}`);
  }

  await browser.close();
  console.log('\nDone — 4 placeholders created.');
}

main().catch(console.error);
