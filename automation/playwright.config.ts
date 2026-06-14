import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  timeout: 120000,

  expect: {
    timeout: 10000
  },

  use: {
    headless: false,
    screenshot: 'only-on-failure',

    actionTimeout: 30000,
    navigationTimeout: 60000,
  },

  reporter: 'html'
});