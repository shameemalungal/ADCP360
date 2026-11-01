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

  // Click on "My Profile"
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const btn = buttons.find(b => b.textContent && b.textContent.includes('My Profile'));
    if (btn) btn.click();
  });

  console.log('Clicked My Profile');
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'C:\\Antigravity\\ADCP\\screenshot_profile_modal.png' });

  // Close modal
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const closeBtn = buttons.find(b => b.textContent && b.textContent.includes('Close'));
    if (closeBtn) closeBtn.click();
  });
  await new Promise(r => setTimeout(r, 300));

  // Open dropdown again and click "Account Settings"
  await profileButton.click();
  await new Promise(r => setTimeout(r, 400));

  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const btn = buttons.find(b => b.textContent && b.textContent.includes('Account Settings'));
    if (btn) btn.click();
  });

  console.log('Clicked Account Settings');
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'C:\\Antigravity\\ADCP\\screenshot_settings_modal.png' });

  await browser.close();
  console.log('Modal check complete');
}

main().catch(console.error);

