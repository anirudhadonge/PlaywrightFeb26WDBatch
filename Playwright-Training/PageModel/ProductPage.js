

import { Headers } from "./Headers";
import { expect } from "@playwright/test";

export class ProductPage extends Headers {
    
    searchProductInput = 'input#search_product';
    productNameLocator = ".productinfo.text-center p";
    searchButton ="button#submit_search"
    constructor(page) {
        super(page);
    }


    async searchProduct(productName) {
        await this.fill(this.searchProductInput, productName);
        await this.clickOnElement(this.searchButton);
    }

    async ValidateSearchedProduct(productName) {
        await this.page.waitForTimeout(5000);
        const productNames = await this.page.locator(this.productNameLocator).allTextContents();
         for(let pdName of productNames){
            expect(pdName.toLowerCase().includes(productName.toLowerCase())).toBeTruthy();
         }        
    }
}