const { Given, When, Then } = require('cucumber');
// import mercuryToursLoginPage  from '../pageobjects/mercurytoursloginpage';
const mercuryToursLoginPage  = require('../pageobjects/mercurytoursloginpage')
Given(/^I'm on the login page$/, function(){
    browser.url('http://mctesting.net/mercurytours/mercurytours.html')
});

When(/^I log in with a default user$/, function(){
    // browser.element("//input[@name='username']").setValue("mercury");
    // browser.$("//input[@name='username']").setValue("mercury");
    // browser.$("//input[@name='username']");
    //    const username= 
    //    browser.$("//input[@name='username']");
    // const username = $("//input[@name='username']");
    // const username = $("/html/body/table/tbody/tr/td[3]/form/table/tbody/tr[4]/td/table/tbody/tr[2]/td[2]/input");
    // username.setValue('mercury');
    // const password = 
    // browser.$("//input[@name='password']");
    //    password.setValue('mercury');
    // browser.$("//input[@name='login']");
    //browser.element is similar to driver dot findelement in selenium.
    //"//input[@name='userName']" it is .xpath or .id so it will automatically recognise whetehr xpath
    //whetehr it is the css. we don't have to explicitly provide which loacted type is.
    mercuryToursLoginPage.login();

    // var attribute=mercuryToursLoginPage.inputUsername.getAttribute("size");
    // console.log("attribute is:"+attribute );

    // var cssprop = 
});

Then(/^I shall be on the Flight Finder page$/, function(){
    var strUrl = browser.getUrl();
    //browser.getUrl() is fetch the url of that particular page. 
    console.log("URL is: " + strUrl);
    // browser.pause(10000);
});