import { test } from "@playwright/test";

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  getLocator(locatorString) {
    return this.page.locator(locatorString);
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async clickOnElement(locatorString) {
    await this.getLocator(locatorString).click();
  }

  async uploadFile(locatorString, filePath) {
    const fileChooser = await this.getEventObject(locatorString,"filechooser")
    await fileChooser.setFiles(filePath);
  }

  async downloadFile(locatorString, path) {
    const download = await this.getEventObject(locatorString,"download")
    await download.saveAs(path + download.suggestedFilename());
  }

  async getEventObject(locatorString, eventName) {
    const eventPromise = this.page.waitForEvent(eventName);
    await this.clickOnElement(locatorString);
    return await eventPromise;
  }
}
