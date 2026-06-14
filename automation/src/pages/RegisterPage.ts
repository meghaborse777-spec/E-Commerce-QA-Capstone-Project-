import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {

private genderFemale = '#gender-female';
private firstName = '#FirstName';
private lastName = '#LastName';
private email = '#Email';
private password = '#Password';
private confirmPassword = '#ConfirmPassword';
private registerButton = '#register-button';
private successMessage = '.result';

async selectGender() {
await this.click(this.genderFemale);
}

async enterFirstName(name: string) {
await this.fill(this.firstName, name);
}

async enterLastName(name: string) {
await this.fill(this.lastName, name);
}

async enterEmail(email: string) {
await this.fill(this.email, email);
}

async enterPassword(password: string) {
await this.fill(this.password, password);
}

async enterConfirmPassword(password: string) {
await this.fill(this.confirmPassword, password);
}

async clickRegister() {
await this.click(this.registerButton);
}

async registerUser(
firstName: string,
lastName: string,
email: string,
password: string
) {
await this.selectGender();
await this.enterFirstName(firstName);
await this.enterLastName(lastName);
await this.enterEmail(email);
await this.enterPassword(password);
await this.enterConfirmPassword(password);
await this.clickRegister();
}

async getSuccessMessage() {
return await this.getText(this.successMessage);
}
}
