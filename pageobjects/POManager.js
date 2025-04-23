const { HomePage } = require('./HomePage.js');
const { LoginSignupPage } = require('./LoginSignupPage.js');
const { AccountInformationPage } = require('./AccountInformationPage.js');
const { AccountCreatedPage } = require('./AccountCreatedPage.js');
const { AccountDeletedPage } = require('./AccountDeletedPage.js');
const { CartPage } = require('./CartPage.js');
const { CheckoutPage } = require('./CheckoutPage.js');
const { PaymentPage } = require('./PaymentPage.js');
const { PaymentDonePage } = require('./PaymentDonePage.js');

class POManager {
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.loginSignupPage = new LoginSignupPage(this.page);
        this.accountInformationPage = new AccountInformationPage(this.page);
        this.accountCreatedPage = new AccountCreatedPage(this.page);
        this.accountDeletedPage = new AccountDeletedPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.paymentPage = new PaymentPage(this.page);
        this.paymentDonePage = new PaymentDonePage(this.page);
    }

    getHomePage() {
        return this.homePage;
    }

    getloginSignupPage() {
        return this.loginSignupPage;
    }

    getAccountInformationPage() {
        return this.accountInformationPage;
    }

    getAccountCreatedPage() {
        return this.accountCreatedPage;
    }

    getAccountDeletedPage() {
        return this.accountDeletedPage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getCheckoutPage() {
        return this.checkoutPage;
    }

    getPaymentPage() {
        return this.paymentPage;
    }

    getPaymentDonePage() {
        return this.paymentDonePage;
    }
}

module.exports = { POManager };