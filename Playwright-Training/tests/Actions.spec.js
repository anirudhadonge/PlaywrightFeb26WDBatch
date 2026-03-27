import { test, expect, chromium } from "@playwright/test";
import { BasePage } from "./../PageModel/BasePage";
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
test.describe("First two method",async()=>{

test.beforeEach('Navigate to HeroKuApp',async({page})=>{
  await page.goto("https://the-internet.herokuapp.com/");
})
test("Click Action Test", async ({ page }) => {
  await page.locator("[href='/add_remove_elements/']").click({
    delay: 5000,
    timeout: 2000,
  });
  await page.waitForTimeout(5000);
});

test("Press Sequentially and Fill action", async ({ page }) => {
  await page.locator('[href="/login"]').click();
  await page.waitForTimeout(3000);
  await page.locator("#username").pressSequentially("tomsmith", { delay: 500 }); // it replicates the typing activity
  // await page.locator('#username').fill("tomsmith")   // input or textarea  // Copy and Pasting the value
  // /**
  //  * Before it paste the value it will clear the existing value
  //  */
  // await page.waitForTimeout(3000);
  // await page.locator('#username').fill("Anirudha")
  await page.locator("#password").pressSequentially("Anirudha", { delay: 500 });
  await page.waitForTimeout(3000);
});
})


/**
 * selectOption() html tag it supports is "select"
 * 1. Label
 * 2. Value
 * 3. index
 */

test(" @smoke, @p1 Select element test", async ({ page }) => {
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
  //await page.locator("#checkboxes input").nth(0).check();
  await expect.soft(page.locator("#checkboxes input").nth(0)).toBeChecked();
  await page.locator("#checkboxes input").nth(1).uncheck();
  await expect.soft(page.locator("#checkboxes input").nth(1)).not.toBeChecked();
  await page.waitForTimeout(3000);
});

/**
 * we will create a object of promise which would provide me the file upload event
 * we could click on the element which open the file upload dialog
 * wait for the promise to return the file upload event
 * using this file upload event i will upload the file using the file path
 */
test("UPloading file test",{
  tag:"@smoke"
}, async ({ page }) => {
  let basePage = new BasePage(page);
  await basePage.goto("https://the-internet.herokuapp.com/");
  await basePage.clickOnElement('[href="/upload"]');
  //await page.locator("#file-upload").setInputFiles(["./Files/sample-upload.txt","./Files/sample-upload.txt"]);
  await basePage.uploadFile("#file-upload", "./Files/sample-upload.txt");
  await page.waitForTimeout(4000);
});
/**
 * create a promise object of Download Event
 * we could click on the element which download the file
 * wait for the Download Event object be create using the promise
 * using the download event object we would save the file
 */

test("@p1 @Download Download file test", async ({ page }) => {
  let basePage = new BasePage(page);
  await basePage.goto("https://the-internet.herokuapp.com/");
  await basePage.clickOnElement('[href="/download"]');
  await basePage.downloadFile('[href="download/hello.json"]', "./Files/");
  await basePage.downloadFile('[href="download/SomeFile.txt"]', "./Files/");
});
// Frame Object using the address of the Frame
// From the frame object we will locate the html element of the inner html
test("Frames test", async ({ page }) => {
  let basePage = new BasePage(page);
  await basePage.goto("https://the-internet.herokuapp.com/");
  await basePage.clickOnElement('[href="/frames"]');
  await basePage.clickOnElement('[href="/iframe"]');
  let frame = basePage.getFrameLocator("#mce_0_ifr");
  await expect(frame.locator("#tinymce p")).toBeVisible();
});

test("Js Alerts", async ({ page }) => {
  let basePage = new BasePage(page);
  await basePage.goto("https://the-internet.herokuapp.com/");
  await basePage.clickOnElement('[href="/javascript_alerts"]');
  // page.on('dialog',(dialog)=>{
  //   console.log(dialog.message());
  //   dialog.accept();
  // })
  // await page.locator('[onclick="jsAlert()"]').click();
  await basePage.handleJSAlert('[onclick="jsAlert()"]');
  await expect(page.locator("#result")).toHaveText(
    "You successfully clicked an alert",
  );
  await page.waitForTimeout(5000);
});

test("Js Confirm dialog", async ({ page }) => {
  let basePage = new BasePage(page);
  await basePage.goto("https://the-internet.herokuapp.com/");
  await basePage.clickOnElement('[href="/javascript_alerts"]');
  await basePage.handleJSAlert('[onclick="jsConfirm()"]', false);
  // page.on('dialog',(dialog)=>{
  //    console.log(dialog.message());
  //     //dialog.accept();
  //     dialog.dismiss();
  // })
  // await page.locator('[onclick="jsConfirm()"]').click();
  //await expect(page.locator("#result")).toHaveText('You clicked: Ok')
  await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
  await page.waitForTimeout(5000);
});

test("Js Prompt dialog", async ({ page }) => {
  let message = "This is a playwright demo";
  let basePage = new BasePage(page);
  await basePage.goto("https://the-internet.herokuapp.com/");
  await basePage.clickOnElement('[href="/javascript_alerts"]');
  await basePage.handleJSAlert('[onclick="jsPrompt()"]', true, message);
  // page.on('dialog',(dialog)=>{
  //    console.log(dialog.message());
  //     dialog.accept(message);
  //     //dialog.dismiss();
  // })
  // await page.locator('[onclick="jsPrompt()"]').click();
  //await expect(page.locator("#result")).toHaveText('You clicked: Ok')
  await expect(page.locator("#result")).toHaveText("You entered: " + message);
  await page.waitForTimeout(5000);
});

test("Browser context ", async () => {
  let browser = await chromium.launch({
    channel: "msedge",
    headless: false,
  });
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("www.google.com");
});

test("Multiple windows", async ({ page, context }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/windows"]').click();
  const newPagePromise = context.waitForEvent("page");
  await page.locator('[href="/windows/new"]').click();
  const newPage = await newPagePromise;
  await expect(newPage.locator(".example h3")).toHaveText("New Window");
});

test("Handling windows Authencation", async ({ page }) => {
  // let context = await browser.newContext({
  //   httpCredentials:{
  //     username:'admin',
  //     password:'admin'
  //   }
  // })
  // let page = await context.newPage({

  // });
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/digest_auth"]').click();
  await expect(page.locator(".example p")).toContainText(
    "Congratulations! You must have the proper credentials.",
  );
  await page.waitForTimeout(5000);
});

test("drag and drop test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  //await page.waitForTimeout(3000);
  await page.locator('[href="/drag_and_drop"]').click();
  //await page.waitForTimeout(3000);
  await page.locator("#column-a").dragTo(page.locator("#column-b"));
  //await page.waitForTimeout(5000); //source.dragTo(destination)
});

test("textContent test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  let locatorObj = page.locator("#content h2");
  await locatorObj.waitFor();
  let header = await page.locator("#content h2").textContent();
  await page.waitForLoadState("", {
    timeout: 5000,
  });
});
