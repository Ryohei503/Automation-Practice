const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.shoppingCartHeading = page.locator('text=Shopping Cart');
        this.proceedToCheckoutButton = page.locator('a[class="btn btn-default check_out"]');     
    }

    // Verify 
    async verifyCartPage() {
        await expect(this.shoppingCartHeading).toBeVisible();
    }

    // Click 'Proceed to checkout' button
    async proceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    }
}

module.exports = { CartPage };
