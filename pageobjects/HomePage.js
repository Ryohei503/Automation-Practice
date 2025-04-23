const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.mainImage = page.locator('img[alt="Website for automation practice"]');
        this.signupLoginLink = page.locator('text=Signup / Login');
        this.loggedInAsUsername = page.locator('text=Logged in as');
        this.deleteAccountLink = page.locator('text=Delete Account');
        this.cartButton = page.locator('a:has-text("View Cart")');
    }

    async goTo() {
        await this.page.goto('http://automationexercise.com');
    }

    // Verify that the home page is visible by checking for the presence of the main image
    async verifyHomePageVisible() {
        await expect(this.mainImage).toBeVisible();
    }

    // Click on the 'Signup / Login' link
    async clickSignupLogin() {
        await this.signupLoginLink.click();
    }

    // Verify that the user is logged in by checking whether the user name is displayed in home page
    async verifyLogin(username) {
        const displayedName = await this.loggedInAsUsername.textContent();
        expect(displayedName).toContain(username);
    }

    // Click on the 'Delete Account' link
    async clickDeleteAccountButton() {
        await this.deleteAccountLink.click();
    }

    // Add product to cart
    async addProductsToCart(productName) {
        const productLocator = this.page.locator(`.productinfo p:has-text("${productName}")`).locator('..').locator('a[data-product-id]');
        await productLocator.first().click();
    }

    // Click cart button
    async clickCartButton() {
        await this.cartButton.click();
    }
}

module.exports = { HomePage };