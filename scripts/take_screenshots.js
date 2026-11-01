import puppeteer from 'puppeteer-core';
import fs from 'fs';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function main() {
  console.log('Launching Edge...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  // Desktop (1440 x 1000)
  console.log('Taking Desktop screenshot...');
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000)); // wait for charts to animate
  await page.screenshot({ path: 'C:\\Antigravity\\ADCP\\screenshot_desktop.png', fullPage: false });
  await page.screenshot({ path: 'C:\\Antigravity\\ADCP\\screenshot_desktop_full.png', fullPage: true });

  // Tablet (768 x 1024)
  console.log('Taking Tablet screenshot...');
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 1 });
  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'C:\\Antigravity\\ADCP\\screenshot_tablet.png', fullPage: false });

  // Mobile (375 x 812)
  console.log('Taking Mobile screenshot...');
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 1 });
  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'C:\\Antigravity\\ADCP\\screenshot_mobile.png', fullPage: false });

  await browser.close();
  console.log('All screenshots captured successfully!');
}

main().catch(err => {
  console.error('Error taking screenshots:', err);
  process.exit(1);
});

