const { test } = require('@playwright/test');
const { PracticePage } = require('../pageobjects/PracticePage');
const dataset = JSON.parse(JSON.stringify(require("../utils/practicePageTestData.json")));


test('Practice Page', async ({ page, context }) => {
    const practicePage = new PracticePage(page);
    await practicePage.goTo();
    await practicePage.checkRadioButton(dataset.radioOption);
    await practicePage.selectCountry(dataset.value, dataset.country);
    await practicePage.selectDropdown(dataset.dropdownOption);
    await practicePage.checkCheckbox(dataset.checkboxOption);
    await practicePage.uncheckCheckbox(dataset.checkboxOption);
    await practicePage.handleNewWindow(context);
    await practicePage.handleNewTab(context);
    await practicePage.handleAlert(dataset.name);
    await practicePage.handleConfirm(dataset.name);
    await practicePage.hideTextBox();
    await practicePage.showTextBox();
    await practicePage.getTableData(dataset.row, dataset.expectedValue);
    await practicePage.vefiryTableFixHeadData();
    await practicePage.verifyHoverOver();
    await practicePage.verifyIframe();

});
