import { test, expect } from "@playwright/test";

test.beforeEach("Navigate to Login Page", async ({ page }) => {
  await test.step("Navigate to Herokuapp login page", async () => {
    await page.goto("https://the-internet.herokuapp.com/login");
  });
});

test.only("Login to Application", async ({ page }) => {
  test.slow();
  await test.step("Enter the Username and password and Login", async () => {
    await page.locator("#username").pressSequentially("tomsmith");
    await page.locator("#password").pressSequentially("SuperSecretPassword!");
    await page.locator(".radius").click();
  });

  await test.step("Validate login is successfull", async () => {
    await expect(page.locator(".subheader")).toContainText(
      "Welcome to the Secure Area",
    );
  });

  await test.step("Logout and Validated Logout is succesfull", async () => {
    await page.locator(".button.secondary.radius").click();
    await expect(page.locator(".flash.success")).toContainText(
      "You logged out of the secure area!",
    );
  });
});
