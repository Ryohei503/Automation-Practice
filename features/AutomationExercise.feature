Feature: Automation Exercise

    @Register
    Scenario Outline: Register a new user
        Given Launch the browser
        When Navigate to the home page
        Then Verify that home page is visible successfully
        When Click on Signup/Login button
        Then Verify New User Signup! is visible
        When Enter '<username>' and '<email address>', and clicks Signup button
        Then Verify that ENTER ACCOUNT INFORMATION is visible
        When Fill in account information, which includes '<title>', '<password>', '<birthDay>', '<birthMonth>', '<year>'
        And Select the newsletter and special offers checkboxes
        And Fill in the address details fields, which includes '<firstName>', '<lastName>', '<company>', '<address1>', '<address2>', '<country>', '<state>', '<city>', '<zipcode>', '<mobileNumber>'
        And Click Create Account button
        Then Verify that ACCOUNT CREATED! is visible
        When Click Continue button
        Then Verify that Logged in as '<username>' is visible
        When Click Delete Account button
        Then Verify that ACCOUNT DELETED! is visible

        Examples:
            | username | email address   | title | password    | birthDay | birthMonth | year | firstName | lastName | company      | address1    | address2 | country       | state      | city          | zipcode | mobileNumber |
            | Test1    | alknv@gmail.com | Mrs   | password123 | 1        | January    | 2000 | Test      | User1    | Test Company | 123 Test St | Suite 1  | United States | California | Los Angeles   | 90001   | 1234567890   |
            | Test2    | bnvem@gmail.com | Mr    | bnzfhvirr   | 5        | September  | 2005 | Test      | User2    | Cognizant    | 100 St      |          | United States | New York   | New York City | 21840   | 2405249085   |
            | Test3    | jifey@gmail.com | Mr    | bfncbeyu    | 19       | March      | 1995 | Test      | User3    | Google       | 400 St      |          | India         | Tamil Nadu | Chennai       | 59374   | 049556485    |



    @Order
    Scenario Outline: Login and place order
        Given I have test data from a csv file for test case <index>
        Given Launch the browser
        When Navigate to the home page
        Then Verify that home page is visible successfully
        When Click on Signup/Login button
        And Fill email and password and click Login button
        Then Verify the username at top
        When Add a product to cart
        And Click View Cart button
        Then Verify that cart page is displayed
        When Click Proceed To Checkout
        Then Verify Address Details and Review Your Order
        When Enter description in comment text area and click Place Order
        And Enter payment details: Name on Card, Card Number, CVC, Expiration date
        And Click Pay and Confirm Order button
        Then Verify success message: Your order has been placed successfully!

        Examples:
            | index |
            | 0     |
            | 1     |
            | 2     |
