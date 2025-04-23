const { expect } = require('@playwright/test');

class AccountCreatedPage {
    constructor(page) {
        this.page = page;
        this.accountCreatedHeading = page.locator('text=ACCOUNT CREATED!');
        this.continueButton = page.locator('[data-qa="continue-button"]');
    }

    // Verify that the 'ACCOUNT CREATED' heading is visible
    async verifyAccountCreated() {
        await expect(this.accountCreatedHeading).toBeVisible();
    }

    // Click the continue button
    async clickContinueButton() {
        await this.continueButton.click();
    }
}

module.exports = { AccountCreatedPage };