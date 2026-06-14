import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async click(locator: string) {
    await this.page.locator(locator).click();
  }

  async fill(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }

  async getTitle() {
    return await this.page.title();
  }

  async getText(locator: string) {
    return await this.page.locator(locator).innerText();
  }

  async isVisible(locator: string) {
    return await this.page.locator(locator).isVisible();
  }

  async waitForLocator(locator: string) {
    await this.page.locator(locator).waitFor();
  }

  async getValue(locator: string) {
    return await this.page.locator(locator).inputValue();
  }

  async takeScreenshot(fileName: string) {
    await this.page.screenshot({
      path: `screenshots/${fileName}.png`,
      fullPage: true
    });
  }
}