const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { POManager } = require('../../pageobjects/POManager');
const { readCSV } = require('../../utils/CSVReader');

// Set default timeout for all steps to 60 seconds
setDefaultTimeout(60 * 1000);


Given('Launch the browser', async () => {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
    this.poManager = new POManager(this.page);
    this.homePage = this.poManager.getHomePage();
    this.loginSignupPage = this.poManager.getloginSignupPage();
    this.accountInformationPage = this.poManager.getAccountInformationPage();
    this.accountCreatedPage = this.poManager.getAccountCreatedPage();
    this.accountDeletedPage = this.poManager.getAccountDeletedPage();
    this.cartPage = this.poManager.getCartPage();
    this.checkoutPage = this.poManager.getCheckoutPage();
    this.paymentPage = this.poManager.getPaymentPage();
    this.paymentDonePage = this.poManager.getPaymentDonePage();
});

When('Navigate to the home page', async () => {
    await this.homePage.goTo();
});

Then('Verify that home page is visible successfully', async () => {
    await this.homePage.verifyHomePageVisible();
});

When('Click on Signup\\/Login button', async () => {
    await this.homePage.clickSignupLogin();
});

Then('Verify New User Signup! is visible', async () => {
    await this.loginSignupPage.verifyNewUserSignupVisible();
});

When('Enter {string} and {string}, and clicks Signup button', async (username, email) => {
    await this.loginSignupPage.enterNameAndEmail(username, email);
    await this.loginSignupPage.clickSignupButton();
});

Then('Verify that ENTER ACCOUNT INFORMATION is visible', async () => {
    await this.accountInformationPage.verifyEnterAccountInformationVisible();
});

When('Fill in account information, which includes {string}, {string}, {string}, {string}, {string}', async (title, password, birthbirthDay, birthMonth, year) => {
    await this.accountInformationPage.fillAccountInformation(title, password, birthbirthDay, birthMonth, year);
});

When('Select the newsletter and special offers checkboxes', async () => {
    await this.accountInformationPage.selectNewsletterAndOffers();
});

When('Fill in the address details fields, which includes {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}', async (firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber) => {
    await this.accountInformationPage.fillAddressDetails(firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber);
});

When('Click Create Account button', async () => {
    await this.accountInformationPage.clickCreateAccountButton();
});

Then('Verify that ACCOUNT CREATED! is visible', async () => {
    await this.accountCreatedPage.verifyAccountCreated();
});

When('Click Continue button', async () => {
    await this.accountCreatedPage.clickContinueButton();
});

Then('Verify that Logged in as {string} is visible', async (username) => {
    await this.homePage.verifyLogin(username);
});

When('Click Delete Account button', async () => {
    await this.homePage.clickDeleteAccountButton();
});

Then('Verify that ACCOUNT DELETED! is visible', async () => {
    await this.accountDeletedPage.verifyAccountDeleted();
    await this.browser.close();
});






Given('I have test data from a csv file for test case {int}', async (index) => {
    this.dataset = await readCSV('../utils/testData.csv');
    this.data = this.dataset[index];
});

When('Fill email and password and click Login button', async () => {
    await this.loginSignupPage.login(this.data.email, this.data.password);
});

Then('Verify the username at top', async () => {
    await this.homePage.verifyLogin(this.data.username);
});

When('Add a product to cart', async () => {
    await this.homePage.addProductsToCart(this.data.productName);
});

When('Click View Cart button', async () => {
    await this.homePage.clickCartButton();
});

Then('Verify that cart page is displayed', async () => {
    await this.cartPage.verifyCartPage();
});

When('Click Proceed To Checkout', async () => {
    await this.cartPage.proceedToCheckout();
});

Then('Verify Address Details and Review Your Order', async () => {
    await this.checkoutPage.verifyAddressDetails(this.data.firstName, this.data.lastName, this.data.address1, this.data.address2, this.data.country, this.data.state, this.data.city, this.data.zipcode, this.data.mobileNumber);
});

When('Enter description in comment text area and click Place Order', async () => {
    await this.checkoutPage.enterDescription(this.data.description);
    await this.checkoutPage.placeOrder();
});

When('Enter payment details: Name on Card, Card Number, CVC, Expiration date', async () => {
    await this.paymentPage.enterPaymentDetails(this.data.name, this.data.cardNumber, this.data.cvc, this.data.expiryMonth, this.data.expiryYear);
});

When('Click Pay and Confirm Order button', async () => {
    await this.paymentPage.payAndConfirmOrder();
});

Then('Verify success message: Your order has been placed successfully!', async () => {
    await this.paymentDonePage.verifySuccessMessage();
    await this.browser.close();
});
