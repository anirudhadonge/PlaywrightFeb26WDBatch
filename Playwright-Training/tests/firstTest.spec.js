import { test, expect } from "@playwright/test";

// async await
//Page Objec is used for performing all the action on the page , click, check,uncheck, navigate

//test ---> page --- locator --->click, check,uncheck
test("This is my first test", async ({ page }) => {
  await page.waitForTimeout(1000);
  await page.goto("https://playwright.dev/");
  await page.waitForTimeout(2000);
  await page.locator(".getStarted_Sjon").click();
  await page.waitForTimeout(2000);
  await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Installation");
  await page.waitForTimeout(2000);
});
