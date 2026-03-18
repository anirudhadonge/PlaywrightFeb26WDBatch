import { test } from "@playwright/test";
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

test.only("Check action test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/checkboxes"]').click();
  await page.waitForTimeout(3000);
  await page.locator("#checkboxes input").nth(0).check();
  await page.waitForTimeout(3000);
  await page.locator("#checkboxes input").nth(1).uncheck();
  await page.waitForTimeout(3000);
});
