import { BasePage } from "./BasePage"


export class Headers extends BasePage {
    homeLink ='.nav.navbar-nav [href="/"]';
    productLink ='[href="/products"]';
    cartLink ='[href="/view_cart"]';
    loginAndSignupLink ='[href="/login"]';
    logoutLink ='[href="/logout"]';
    constructor(page){
        super(page);
    }

    async openHomePage(){
       await this.clickOnElement(this.homeLink);
    }

    async openProductPage(){
        await this.clickOnElement(this.productLink);
    }

    async openCartPage(){
        await this.clickOnElement(this.cartLink);
    }

    async openLoginAndSignupPage(){
        await this.clickOnElement(this.loginAndSignupLink);
    }

    async openLogoutPage(){
        await this.clickOnElement(this.logoutLink);
    }

    async validateUserLoggedIn(){
        await expect(this.getLocator(this.logoutLink)).toBeVisible();
    }
}