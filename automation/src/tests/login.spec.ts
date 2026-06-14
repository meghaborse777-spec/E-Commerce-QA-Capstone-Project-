import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test-data/loginData.json';

test('ATC_002 - Verify login with valid credentials', async ({ page }) => {

const homePage = new HomePage(page);
const loginPage = new LoginPage(page);

await homePage.openHomePage();
await homePage.clickLogin();

await loginPage.login(
loginData.validUser.email,
loginData.validUser.password
);

await expect(page).toHaveURL(/.*account/i);
});
