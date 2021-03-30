const { Given, When, Then } = require('cucumber');
const mercuryToursLoginPage  = require('../pageobjects/mercurytoursloginpage')
Given(/^I'm on the login page$/, function(){
    browser.url('http://mctesting.net/mercurytours/mercurytours.html')
});

When(/^I log in with a default user$/, function(){
    mercuryToursLoginPage.login();
});

Then(/^I shall be on the Flight Finder page$/, function(){
    var strUrl = browser.getUrl();
    console.log("URL is: " + strUrl);
});