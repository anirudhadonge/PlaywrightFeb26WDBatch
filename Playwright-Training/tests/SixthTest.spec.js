import {test,expect} from '@playwright/test'
test("Hover test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/hovers"]').click();
  await page.waitForTimeout(5000);
  let locator1 = page.locator('[src="/img/avatar-blank.jpg"]').nth(0);
  await locator1.hover();
  await page.waitForTimeout(5000);
  await page.locator('[src="/img/avatar-blank.jpg"]').nth(1).hover();
  await page.waitForTimeout(5000);
  await page.locator('[src="/img/avatar-blank.jpg"]').nth(2).hover();
  await page.waitForTimeout(5000);
});