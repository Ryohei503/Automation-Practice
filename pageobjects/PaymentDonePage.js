const { expect } = require('@playwright/test');

class PaymentDonePage {
    constructor(page) {
        this.page = page;
        this.successMessage = page.locator('text=Congratulations! Your order has been confirmed!');
    }

    // Verify whether the success message is visible
    async verifySuccessMessage() {
        await expect(this.successMessage).toBeVisible();
    }
}

module.exports = { PaymentDonePage };
