// playwright.config.js

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Directory where your tests are located
  timeout: 600000,     // Timeout for each test in milliseconds
  retries: 2,         // Number of retry attempts if a test fails
  projects: [
    // {
    //   name: 'chromium',
    //   use: { browserName: 'chromium' }, // Test in Chromium browser
    // },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },  // Test in Firefox browser
    },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },   // Test in WebKit browser
    // },
  ],
  // Add the reporters section
  reporter: [
    ['html', { open: 'on-failure' }] // HTML report
  ],
  use: {
    headless: true,    // Run tests in headless mode (change to false for headful)
    screenshot: 'only-on-failure', // Take screenshots only when tests fail
    video: 'retain-on-failure',    // Record video only on failures
  },
});
