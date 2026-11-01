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
  await new Promise(r => setTimeout(r, 600));

  // Click on the user profile button to open dropdown
  const profileButton = await page.$('button[aria-haspopup="true"]');
  if (profileButton) {
    await profileButton.click();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: 'C:\\Antigravity\\ADCP\\screenshot_dropdown.png' });
    console.log('Dropdown screenshot taken!');
  } else {
    console.log('Profile button not found');
  }

  await browser.close();
}

main().catch(console.error);

