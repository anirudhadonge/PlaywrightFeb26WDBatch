import { Headers } from "./Headers";
export class HomePage extends Headers {
    constructor(page) {
        super(page);
    }

    async addToCart(productName) {
        const addToCartButton = `//p[text()='${productName}']//following-sibling::a`;
        await this.clickOnElement(addToCartButton);
    }
}