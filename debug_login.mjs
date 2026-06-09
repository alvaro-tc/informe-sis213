import { chromium } from 'playwright';

const BASE = 'https://cafeteria-5.duckdns.org';

async function getSessionCookie(email, password) {
  const res = await fetch(`${BASE}/api/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const setCookieHeader = res.headers.get('set-cookie');
  const body = await res.json();
  console.log(`API ${email}: status=${res.status}`);
  console.log(`  Set-Cookie: ${setCookieHeader}`);
  console.log(`  Body keys: ${Object.keys(body.data || {}).join(', ')}`);
  return { status: res.status, setCookieHeader, body };
}

async function main() {
  // Test admin credentials
  await getSessionCookie('admin@admin.com', 'admin');
  await getSessionCookie('barista@gmail.com', 'barista');
  await getSessionCookie('cajero@gmail.com', 'cajero');
}

main().catch(console.error);
