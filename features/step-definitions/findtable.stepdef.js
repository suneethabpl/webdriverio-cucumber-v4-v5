const assert = require('assert');
const { Given, When, Then } = require('cucumber');
Given(/^I'm on toolsqa table page$/, function () {
    browser.url("https://www.techlistic.com/p/demo-selenium-practice.html");
    var tableObj = browser.findElement("xpath", "//*/div/div[1]/table");
    // console.log("Table object is:" + tableObj);
    console.log("Table object is:" + JSON.stringify(tableObj));


    var columns = browser.findElements("xpath", "//*/div/div[1]/table/tbody/tr/td");
    console.log("columns are:" + JSON.stringify(columns));
    // console.log("columns are:" + columns);

    // var structure = browser.findElementFromElement(tableObj.toString(), "xpath", ".//thead/tr/th[1]");

    // console.log("text returned as:" + structure.getText());
});

When(/^find the elements in the table$/, function () {
});

Then(/^display the elements$/, () => {

})