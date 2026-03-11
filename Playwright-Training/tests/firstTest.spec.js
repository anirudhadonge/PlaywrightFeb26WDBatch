import {test,expect} from '@playwright/test'


test.only("This is my first test",async({page})=>{
    await page.goto("https://playwright.dev/");
    //await page.waitForTimeout(3000);
    await page.locator(".getStarted_Sjon").click();
    //await page.waitForTimeout(3000);
    await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Installation");
    //await page.waitForTimeout(3000);
})