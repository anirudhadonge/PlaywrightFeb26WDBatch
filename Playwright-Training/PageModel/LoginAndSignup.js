import { Headers } from "./Headers";
import { test } from "@playwright/test";


export class LoginAndSignup extends Headers{
    emailInput ='[data-qa="login-email"]';
    passwordInput ='[data-qa="login-password"]';
    loginButton ='[data-qa="login-button"]';
    constructor(page){
        super(page);
    }

    async login(email, password){
        await this.fill(this.emailInput, email);
        await this.fill(this.passwordInput, password);
        await this.clickOnElement(this.loginButton);
    }
}