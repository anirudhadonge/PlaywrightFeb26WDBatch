import {test} from '@playwright/test';
import { LoginAndSignup } from '../PageModel/LoginAndSignup';
import { HomePage } from '../PageModel/HomePage';
import { ProductPage } from '../PageModel/ProductPage'; 

export const customTest = test.extend({
    "loginPage": async({page},use)=>{
        let loginPage = new LoginAndSignup(page);
        await loginPage.goto(process.env.URL);
        await loginPage.openLoginAndSignupPage();
         await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
            await use(loginPage);
    },
    "homePage": async({page},use)=>{
        let homePage = new HomePage(page);
            await use(homePage);
    },
    "productPage": async({page},use)=>{
        let productPage = new ProductPage(page);
            await use(productPage);
    }
})


