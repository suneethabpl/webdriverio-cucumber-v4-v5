// describe('my awesome website', () => {
//     it('should do some assertions', () => {
//         browser.url('https://webdriver.io')
//         expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
//     })
// })

const assert = require('assert');
const { Given, When, Then } = require('cucumber');
Given(/^I'm on webdriverio page$/, function () {
    browser.url("https://webdriver.io");
    browser.minimizeWindow()
    browser.pause(5000);
    browser.fullscreenWindow();
    browser.pause(5000);
    browser.minimizeWindow();
    browser.pause(5000);
});

When(/^Should have teh right title$/, function () {
});

Then(/^maximize window$/, () => {

})