const { expect } = require('@playwright/test');

class AccountInformationPage {
    constructor(page) {
        this.page = page;
        this.EnterAccountInfoHeading = page.locator('text=Enter Account Information');
        this.titleMr = page.locator('#id_gender1'); 
        this.titleMrs = page.locator('#id_gender2'); 
        this.passwordField = page.locator('#password');
        this.dayDropdown = page.locator('#days');
        this.monthDropdown = page.locator('#months');
        this.yearDropdown = page.locator('#years');
        this.firstNameField = page.locator('#first_name');
        this.lastNameField = page.locator('#last_name');
        this.newsletterCheckbox = page.locator('#newsletter');
        this.specialOffersCheckbox = page.locator('#optin');
        this.companyField = page.locator('#company');
        this.address1Field = page.locator('#address1');
        this.address2Field = page.locator('#address2');
        this.countryDropdown = page.locator('#country');
        this.stateField = page.locator('#state');
        this.cityField = page.locator('#city');
        this.zipcodeField = page.locator('#zipcode');
        this.mobileNumberField = page.locator('#mobile_number');
        this.createAccountButton = page.locator('button:has-text("Create Account")');
    }

    // Verify that the 'Enter Account Information' heading is visible
    async verifyEnterAccountInformationVisible() {
        await expect(this.EnterAccountInfoHeading).toBeVisible();
    }

    // Fill in the account information fields
    async fillAccountInformation(title, password, birthDay, birthMonth, year) {
        if (title === 'Mr') {
            await this.titleMr.click();
        }
        else {
            await this.titleMrs.click();
        }
        await this.passwordField.fill(password);
        await this.dayDropdown.selectOption(birthDay);
        await this.monthDropdown.selectOption(birthMonth);
        await this.yearDropdown.selectOption(year);
    }

    // Select the newsletter and special offers checkboxes
    async selectNewsletterAndOffers() {
        await this.newsletterCheckbox.check();
        await this.specialOffersCheckbox.check();
    }

    // Fill in the address details fields
    async fillAddressDetails(firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.companyField.fill(company);
        await this.address1Field.fill(address1);
        await this.address2Field.fill(address2);
        await this.countryDropdown.selectOption(country);
        await this.stateField.fill(state);
        await this.cityField.fill(city);
        await this.zipcodeField.fill(zipcode);
        await this.mobileNumberField.fill(mobileNumber);
    }

    // Click on the 'Create Account' button
    async clickCreateAccountButton() {
        await this.createAccountButton.click();
    }
}

module.exports = { AccountInformationPage };