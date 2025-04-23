const { expect } = require('@playwright/test');

class LoginSignupPage {
    constructor(page) {
        this.page = page;
        this.newUserSignupHeading = page.locator('text=New User Signup!');
        this.signupNameField = page.locator('[name="name"]');
        this.signupEmailField = page.locator('[name="email"][data-qa="signup-email"]');
        this.signupButton = page.locator('button:has-text("Signup")');
        this.loginEmailField = page.locator('input[data-qa="login-email"]');
        this.loginPasswordField = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');

    }

    // Verify that the 'New User Signup!' heading is visible
    async verifyNewUserSignupVisible() {
        await expect(this.newUserSignupHeading).toBeVisible();
    }

    // Enter the username and email address
    async enterNameAndEmail(username, email) {
        await this.signupNameField.fill(username);
        await this.signupEmailField.fill(email);
    }

    // Click on the 'Signup' button
    async clickSignupButton() {
        await this.signupButton.click();
    }

    // Login using email address and password
    async login(email, password) {
        await this.loginEmailField.fill(email);
        await this.loginPasswordField.fill(password);
        await this.loginButton.click();
    }

}

module.exports = { LoginSignupPage };