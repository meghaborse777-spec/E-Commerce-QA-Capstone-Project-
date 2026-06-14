import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import registerData from '../test-data/registerData.json';

test('ATC_001 - User Registration', async ({ page }) => {

const homePage = new HomePage(page);
const registerPage = new RegisterPage(page);

await homePage.openHomePage();
await homePage.clickRegister();

await registerPage.registerUser(
registerData.firstName,
registerData.lastName,
registerData.email,
registerData.password
);

const message = await registerPage.getSuccessMessage();

expect(message).toContain('Your registration completed');
});
