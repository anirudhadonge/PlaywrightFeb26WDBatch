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
    const fileChooser = await this.getEventObject(locatorString, "filechooser");
    await fileChooser.setFiles(filePath);
  }

  async downloadFile(locatorString, path) {
    const download = await this.getEventObject(locatorString, "download");
    await download.saveAs(path + download.suggestedFilename());
  }

  async getEventObject(locatorString, eventName) {
    const eventPromise = this.page.waitForEvent(eventName);
    await this.clickOnElement(locatorString);
    return await eventPromise;
  }

  async getFrameLocator(locatorString) {
    return this.page.frameLocator(locatorString);
  }

  async handleJSAlert(locatorString, flag = true, message = "") {
    this.page.on("dialog", (dialog) => {
      console.log(dialog.message());
      if (flag) {
        if (message == "") {
          dialog.accept();
        } else {
          dialog.accept(message);
        }
      } else {
        dialog.dismiss();
      }
    });
    this.clickOnElement(locatorString);
  }

  async fill(locatorString, value) {
    await this.getLocator(locatorString).fill(value);
  }

  async pressSequentially(locatorString, value, timeout=100) {
    await this.getLocator(locatorString).pressSequentially(value, { delay:timeout });
  }

  async getAllTextContents(locatorString) {
    return await this.page.locator(locatorString).allTextContents();
  }
}
