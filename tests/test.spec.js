const { firefox } = require('playwright');
const { test, expect } = require('@playwright/test');

test.describe('My Test Suite', () => {
  test('My Test Case', async ({}) => {
  // const browser = await chromium.launch();
  const browser = await firefox.launch();
  const page = await browser.newPage();

  
  await authenticate(page);
  

  await browser.close();

  });
});

async function authenticate(page) {
  await page.goto('https://bitheap.tech');
  await page.click('#menu-item-2330'); 
  await page.locator("[name='xoo-el-username']").fill(process.env.BITHEAP_USERNAME)
  await page.locator("[name='xoo-el-password']").fill(process.env.PASS)
  await page.locator('.xoo-el-login-btn').click()
  const text = await page.locator('css=#menu-item-2333 > a').textContent()
  if(text != "Hello, Playwright") 
    console.error("The authentication was not successful!")
  await page.screenshot({ path: 'screenshot.png' });
}



