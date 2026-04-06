import { test, expect } from "@playwright/test";
import { ProductPage } from "../PageModel/ProductPage";
import { LoginAndSignup } from "../PageModel/LoginAndSignup";
import { customTest } from "../Fixture/CustomFixture";
import product from "../TestData/product.json";
// Dev , QA , Staging , Prod
let productPage;
let loginAndSignup;
test.only("Add to cart", async ({ page }) => {
  productPage = new ProductPage(page);
  loginAndSignup = new LoginAndSignup(page);
  await loginAndSignup.goto(process.env.URL);
  await loginAndSignup.openLoginAndSignupPage();
  await loginAndSignup.login(process.env.USERNAME, process.env.PASSWORD);
  await productPage.openProductPage();
  await productPage.searchProduct(product['productName']);
  await productPage.ValidateSearchedProduct(product['productName']  );
});

// customTest.only("Add to cart using custom fixture", async ({ productPage, loginPage ,homePage,page}) => {
//   await productPage.openProductPage();
//   await productPage.searchProduct("Blue Top");
//   await productPage.ValidateSearchedProduct("Blue Top");
//   await page.waitForTimeout(5000);
//   await homePage.openHomePage();
// });