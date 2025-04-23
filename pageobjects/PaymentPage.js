class PaymentPage {
    constructor(page) {
        this.page = page;
        this.nameOnCardField = page.locator('input[data-qa="name-on-card"]');
        this.cardNumberField = page.locator('input[data-qa="card-number"]');
        this.cvcField = page.locator('input[data-qa="cvc"]');
        this.expiryMonthField = page.locator('input[data-qa="expiry-month"]');
        this.expiryYearField = page.locator('input[data-qa="expiry-year"]');
        this.payAndConfirmButton = page.locator('button[data-qa="pay-button"]');
    }

    // Enter payment details
    async enterPaymentDetails(name, cardNumber, cvc, expiryMonth, expiryYear) {
        await this.nameOnCardField.fill(name);
        await this.cardNumberField.fill(cardNumber);
        await this.cvcField.fill(cvc);
        await this.expiryMonthField.fill(expiryMonth);
        await this.expiryYearField.fill(expiryYear);
    }

    // Click 'Pay and confirm order' button
    async payAndConfirmOrder() {
        await this.payAndConfirmButton.click();
    }
}

module.exports = { PaymentPage };
