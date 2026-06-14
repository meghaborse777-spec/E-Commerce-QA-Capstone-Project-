import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

private emailField = '#Email';
private passwordField = '#Password';
private loginButton = 'button.login-button';
private errorMessage = '.message-error';

async enterEmail(email: string) {
await this.fill(this.emailField, email);
}

async enterPassword(password: string) {
await this.fill(this.passwordField, password);
}

async clickLoginButton() {
await this.click(this.loginButton);
}

async login(email: string, password: string) {
await this.enterEmail(email);
await this.enterPassword(password);
await this.clickLoginButton();
}

async getErrorMessage() {
return await this.getText(this.errorMessage);
}
}
