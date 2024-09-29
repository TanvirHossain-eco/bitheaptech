const { firefox } = require('playwright'); // Remove the Chromium & Added the Firefox
const { test, expect } = require('@playwright/test');

test.describe('My Test Suite', () => {
  test('My Test Case', async ({}) => {
  // const browser = await chromium.launch();
  const browser = await firefox.launch(); // Added the Firefox browser
  const page = await browser.newPage();

  
  await authenticate(page);
  

  await browser.close();

  });
});

async function authenticate(page) {
  await page.goto('https://bitheap.tech');
  await page.click('#menu-item-2330'); // Changes the CSS ID
  await page.locator("[name='xoo-el-username']").fill(process.env.BITHEAP_USERNAME)
  await page.locator("[name='xoo-el-password']").fill(process.env.PASS)
  await page.locator('.xoo-el-login-btn').click() // Changes the XPath to the CSS ID
  const text = await page.locator('css=#menu-item-2333 > a').textContent() // Changes the CSS ID
  if(text != "Hello, Playwright") 
    console.error("The authentication was not successful!")
  await page.screenshot({ path: 'screenshot.png' });
}



