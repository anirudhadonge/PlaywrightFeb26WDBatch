import { test, expect } from '@playwright/test';

test.describe('Add Blue Top to Cart Test', () => {
  test.use({ navigationTimeout: 30000, actionTimeout: 10000 });

  test('Login and add Blue Top to cart and validate in cart', async ({ page }) => {
    // Step 1: Navigate to the website
    await page.goto('https://automationexercise.com/#google_vignette');

    // Step 2: Click on Signup/Login
    await page.click('a:text("Signup / Login")');
    await page.waitForTimeout(1000);

    // Step 3: Fill in login credentials
    await page.fill('input[data-qa="login-email"]', 'anirudha.donge@gmail.com');
    await page.fill('input[data-qa="login-password"]', 'password25');

    // Step 4: Click login button
    await page.click('button[data-qa="login-button"]');
    await page.waitForTimeout(2000);

    // Step 5: Verify login was successful by checking for logout option
    const logoutLink = page.locator('a:text("Logout")');
    await expect(logoutLink).toBeVisible();
    console.log('✅ Login Successful');

    // Step 6: Navigate to Products page
    await page.goto('https://automationexercise.com/products');
    await page.waitForTimeout(1500);

    // Step 7: Scroll to see Blue Top product
    await page.evaluate(() => window.scrollBy(0, 150));
    await page.waitForTimeout(500);

    // Step 8: Click Add to cart button for Blue Top (first product)
    const addToCartButton = page.locator('a:has-text("Add to cart")');
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.first().click();
    await page.waitForTimeout(1500);
    console.log('✅ Add to Cart button clicked');

    // Step 9: Verify the "Added!" confirmation message
    const addedMessage = page.locator('text=Added!');
    await expect(addedMessage).toBeVisible();
    console.log('✅ Product Added Confirmation Message Visible');

    // Step 10: Click View Cart
    await page.click('a:has-text("View Cart")');
    await page.waitForTimeout(1500);
    console.log('✅ Navigated to Cart');

    // Step 11: Verify Blue Top is in the cart
    const cartPage = page.url();
    expect(cartPage).toContain('/view_cart');

    // Step 12: Validate cart items
    const blueTopInCart = page.locator('text=Blue Top');
    await expect(blueTopInCart).toBeVisible();
    console.log('✅ Blue Top item found in cart');

    // Step 13: Verify product details in cart
    const productDescription = page.locator('text=Women > Tops');
    await expect(productDescription).toBeVisible();
    console.log('✅ Product description verified');

    const price = page.locator('text=Rs. 500');
    await expect(price).toBeVisible();
    console.log('✅ Product price verified (Rs. 500)');

    const total = page.locator('text=Rs. 3000');
    await expect(total).toBeVisible();
    console.log('✅ Product total verified (Rs. 3000)');

    console.log('\n✅✅✅ TEST PASSED: Blue Top successfully added to cart and validated! ✅✅✅\n');
  });
});
