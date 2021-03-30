const { Given, When, Then } = require('cucumber');
var textFromTable = [];
Given(/^I'm on the table page$/, function () {
    browser.url('https://www.techlistic.com/p/demo-selenium-practice.html');
})
When(/^I extract the text from a table row$/, function () {
    var table = browser.$("//*/div/div[1]/table/tbody")
    table.$$(".//tr/th").map(function (element) {
        console.log("text from table column: " + element.getText());
        textFromTable.push(element.getText());
    })
})

Then(/^I shall able to print column texts$/, function () {
    console.log("All text from table columns:" + textFromTable);
})