import { BasePage } from './BasePage';
import { config } from '../utils/config';

export class HomePage extends BasePage {

private registerLink = 'text=Register';
private loginLink = 'text=Log in';
private searchBox = '#small-searchterms';
private searchButton = 'button[type="submit"]';

async openHomePage() {
await this.navigate(config.baseUrl);
}

async clickRegister() {
await this.click(this.registerLink);
}

async clickLogin() {
await this.click(this.loginLink);
}

async searchProduct(productName: string) {
await this.fill(this.searchBox, productName);
await this.click(this.searchButton);
}
}
