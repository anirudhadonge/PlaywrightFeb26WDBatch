import {test} from '@playwright/test'


test('get By Role demo', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('[href="/checkboxes"]').click();
    await page.getByRole("checkbox").nth(0).check();
    await page.waitForTimeout(10000);
})


test('get By Label demo', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('[href="/login"]').click();
    await page.getByLabel("Username").fill('tomsmith');
    await page.waitForTimeout(10000);
})

test('Locate by Place Holder ',async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    await page.getByPlaceholder("Enter your mobile number").nth(0).pressSequentially('123456789',{delay:500});
})

test('Locate by Text',async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    // await page.waitForTimeout(5000);
    // await page.getByText("Submit").click();
    // await page.waitForTimeout(5000);
    // await page.getByAltText()
    await page.getByTestId("sh_email1").pressSequentially('ANirudha.donge',{delay:2000});
})

