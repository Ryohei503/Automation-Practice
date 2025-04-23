const { expect } = require('@playwright/test');

class AccountDeletedPage {
    constructor(page) {
        this.page = page;
        this.accountDeletedHeading = page.getByRole('heading', { name: 'ACCOUNT DELETED!' });
    }

    // Verify that the 'ACCOUNT DELETED' heading is visible
    async verifyAccountDeleted() {
        await expect(this.accountDeletedHeading).toBeVisible();
    }
}

module.exports = { AccountDeletedPage };