import puppeteer from 'puppeteer-core';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function main() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));

  // Open dropdown
  const profileButton = await page.$('button[aria-haspopup="true"]');
  await profileButton.click();
  await new Promise(r => setTimeout(r, 400));

  // Click on Taluk Coordinator role item
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const talukBtn = buttons.find(b => b.textContent && b.textContent.includes('Taluk Coordinator'));
    if (talukBtn) talukBtn.click();
  });

  console.log('Clicked Taluk Coordinator role');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'C:\\Antigravity\\ADCP\\screenshot_switched_taluk.png' });

  // Open dropdown again and click Logout
  await profileButton.click();
  await new Promise(r => setTimeout(r, 400));

  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const logoutBtn = buttons.find(b => b.textContent && b.textContent.includes('Logout'));
    if (logoutBtn) logoutBtn.click();
  });

  console.log('Clicked Logout action');
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'C:\\Antigravity\\ADCP\\screenshot_logout_modal.png' });

  await browser.close();
  console.log('Role switch and logout tests finished successfully');
}

main().catch(console.error);
