const { expect } = require('@playwright/test');

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.addressDetails = page.locator('#address_delivery');
        this.commentTextArea = page.locator('textarea[name="message"]');
        this.placeOrderButton = page.locator('a[class="btn btn-default check_out"]');
    }

    // Verify email address displayed in check out page
    async verifyAddressDetails(firstName, lastName, address1, address2, country, state, city, zipcode, mobileNumber) {
        const addressText = await this.addressDetails.textContent();
        expect(addressText).toContain(firstName, lastName, address1, address2, country, state, city, zipcode, mobileNumber);

    }

    // Enter description in the text field
    async enterDescription(description) {
        await this.commentTextArea.fill(description);
    }

    // Click place order button
    async placeOrder() {
        await this.placeOrderButton.click();
    }
}

module.exports = { CheckoutPage };
