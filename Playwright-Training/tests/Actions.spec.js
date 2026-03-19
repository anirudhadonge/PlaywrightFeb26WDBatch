import { test } from "@playwright/test";
import {BasePage} from './../PageModel/BasePage'
/**
 * Click()
 * Fill() and PressSequentially
 * check() and uncheck()
 * selectOption()
 * Upload()
 * Download()
 * Frames
 * Javascript Alert
 * Hover
 * New Page
 * Basic Authentication
 * Drag and Drop
 * TextContent
 */

test("Click Action Test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator("[href='/add_remove_elements/']").click({
    delay: 5000,
    timeout: 2000,
  });
  await page.waitForTimeout(5000);
});

test("Press Sequentially and Fill action", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/login"]').click();
  await page.waitForTimeout(3000);
  await page.locator("#username").pressSequentially("tomsmith", { delay: 500 }); // it replicates the typing activity
  // await page.locator('#username').fill("tomsmith")   // input or textarea  // Copy and Pasting the value
  // /**
  //  * Before it paste the value it will clear the existing value
  //  */
  // await page.waitForTimeout(3000);
  // await page.locator('#username').fill("Anirudha")
  await page.locator("#username").pressSequentially("Anirudha", { delay: 500 });
  await page.waitForTimeout(3000);
});

/**
 * selectOption() html tag it supports is "select"
 * 1. Label
 * 2. Value
 * 3. index
 */

test("Select element test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href = "/dropdown"]').click();
  await page.waitForTimeout(3000);
  await page.locator("#dropdown").selectOption({ label: "Option 1" });
  await page.waitForTimeout(3000);
  await page.locator("#dropdown").selectOption({ value: "2" });
  await page.waitForTimeout(3000);
  await page.locator("#dropdown").selectOption({ index: 1 });
  await page.waitForTimeout(3000);
});

/**
 * check()
 * uncheck()
 * isChecked() -- validation , it returned boolean value
 * toBeChecked()-- Validates that the element is checked
 * not.toBeChecked() --- Negative validation of checked
 */

test("Check action test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/checkboxes"]').click();
  await page.waitForTimeout(3000);
  await page.locator("#checkboxes input").nth(0).check();
  await page.waitForTimeout(3000);
  await page.locator("#checkboxes input").nth(1).uncheck();
  await page.waitForTimeout(3000);
});

/**
 * we will create a object of promise which would provide me the file upload event
 * we could click on the element which open the file upload dialog
 * wait for the promise to return the file upload event
 * using this file upload event i will upload the file using the file path
 */
test("UPloading file test", async ({ page }) => {
  let basePage = new BasePage(page);
  await basePage.goto("https://the-internet.herokuapp.com/");
  await basePage.clickOnElement('[href="/upload"]');
  //await page.locator("#file-upload").setInputFiles(["./Files/sample-upload.txt","./Files/sample-upload.txt"]);
  await basePage.uploadFile("#file-upload","./Files/sample-upload.txt");
  await page.waitForTimeout(4000);
});
/**
 * create a promise object of Download Event
 * we could click on the element which download the file
 * wait for the Download Event object be create using the promise
 * using the download event object we would save the file
 */

test.only("Download file test", async ({ page }) => {
  let basePage = new BasePage(page);
  await basePage.goto("https://the-internet.herokuapp.com/");
  await basePage.clickOnElement('[href="/download"]');
  await basePage.downloadFile('[href="download/hello.json"]',"./Files/");
  await basePage.downloadFile('[href="download/SomeFile.txt"]',"./Files/");
});
