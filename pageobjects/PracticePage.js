const { expect } = require('@playwright/test');


class PracticePage {
    constructor(page) {
        this.page = page;
        this.radioBtns = page.getByRole('radio');
        this.suggessionField = page.locator('#autocomplete');
        this.countryOption = page.locator('.ui-menu-item div').first();
        this.dropdown = page.locator('#dropdown-class-example');
        this.checkboxes = page.getByRole('checkbox');
        this.openWindowBtn = page.locator('#openwindow');
        this.openTabBtn = page.locator('#opentab');
        this.nameField = page.getByRole('textbox', { name: 'Enter Your Name' });
        this.alertBtn = page.locator('#alertbtn');
        this.confirmBtn = page.locator('#confirmbtn');
        this.textBox = page.getByRole('textbox', { name: 'Hide/Show Example' });
        this.hideBtn = page.locator('#hide-textbox');
        this.showBtn = page.locator('#show-textbox');
        this.tableRows = page.locator('table[name="courses"] tbody tr');
        this.tableFixHeadRows = page.locator('.tableFixHead tbody tr');
        this.totalAmount = page.locator('.totalAmount');
        this.mouseHover = page.getByRole('button', { name: 'Mouse Hover' });
        this.hoverOption = page.getByRole('link', { name: 'Top' });
    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    }

    async checkRadioButton(radioOption) {
        await this.radioBtns.nth(radioOption - 1).check();
        await expect(this.radioBtns.nth(radioOption - 1)).toBeChecked();
    }

    async selectCountry(value, country) {
        await this.suggessionField.fill(value);
        await this.countryOption.click();
        await expect(this.suggessionField).toHaveValue(country);
    }

    async selectDropdown(dropdownOption) {
        await this.dropdown.selectOption('option' + dropdownOption.toString());
        await expect(this.dropdown).toHaveValue('option' + dropdownOption.toString());
    }

    async checkCheckbox(checkboxOption) {
        await this.checkboxes.nth(checkboxOption - 1).check();
        await expect(this.checkboxes.nth(checkboxOption - 1)).toBeChecked();
    }

    async uncheckCheckbox(checkboxOption) {
        await this.checkboxes.nth(checkboxOption - 1).uncheck();
        await expect(this.checkboxes.nth(checkboxOption - 1)).not.toBeChecked();
    }

    async handleNewWindow(context) {
        const [newPage] = await Promise.all([context.waitForEvent('page'), this.openWindowBtn.click()]);
        await newPage.waitForLoadState();
        expect(newPage.url()).toContain('qaclickacademy');
        await newPage.close();
    }

    async handleNewTab(context) {
        const [newPage] = await Promise.all([context.waitForEvent('page'), this.openTabBtn.click()]);
        await newPage.waitForLoadState();
        expect(newPage.url()).toContain('qaclickacademy');
        await newPage.close();
    }

    async handleAlert(name) {
        await this.nameField.fill(name);
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain(name);
            await dialog.accept();
        });
        await this.alertBtn.click();
    }

    async handleConfirm(name) {
        await this.nameField.fill(name);
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain(name);
            await dialog.accept();
        });
        await this.confirmBtn.click();
    }

    async hideTextBox() {
        await this.hideBtn.click();
        await expect(this.textBox).toBeHidden();
    }

    async showTextBox() {
        await this.showBtn.click();
        await expect(this.textBox).toBeVisible();
    }

    async getTableData(row, expectedValue) {
        const rowNum = await this.tableRows.count();
        expect(rowNum).toBeGreaterThan(0);
        const tableData = await this.tableRows.nth(row).textContent();
        expect(tableData).toContain(expectedValue);
        console.log("Row " + row, tableData);
    }

    async vefiryTableFixHeadData() {
        const rowNum = await this.tableFixHeadRows.count();
        expect(rowNum).toBeGreaterThan(0);
        const amountList = [];
        for (let i = 0; i < await this.tableFixHeadRows.count(); i++) {
            const amountColumn = await this.tableFixHeadRows.nth(i).locator('td:nth-child(4)').textContent();
            amountList.push(parseInt(amountColumn.trim()));
        }
        const calculatedTotal = amountList.reduce((sum, val) => sum + val, 0);
        const totalDisplayedString = await this.totalAmount.textContent();
        const totalDisplayedArray = totalDisplayedString.split(" ");
        const totalDisplayed = totalDisplayedArray[totalDisplayedArray.length - 2];
        expect(calculatedTotal).toBe(parseInt(totalDisplayed.trim())); // checks if the total amount is the same as displayed
    }

    async verifyHoverOver() {
        await this.mouseHover.hover();
        await this.page.waitForTimeout(500);
        await expect(this.hoverOption).toBeVisible();
    }

    async verifyIframe() {
        const frame = this.page.frameLocator('#courses-iframe');
        await expect(frame.locator('body')).toContainText('World-class tutorials on Selenium')
    }


}
module.exports = { PracticePage };