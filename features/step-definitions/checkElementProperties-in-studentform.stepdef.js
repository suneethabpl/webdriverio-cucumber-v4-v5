const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given(/^I'm on the registration form page$/, function () {
  browser.url("https://demoqa.com/automation-practice-form");
});

When(/^validate isElementdisplayed, isElement Enable or selecteted$/, function () {
  var firstnamedisplayed = $('#firstName').isDisplayed();
  console.log("isDispalyed ? " + firstnamedisplayed);


  var lastnameenabled = $("//input[@id='lastName']").isEnabled();
  console.log("isenabled? " + lastnameenabled);



  var genderselected = $('input#gender-radio-1').isSelected();
  console.log("isSelected? " + genderselected);



  var enable = $('#dateOfBirthInput').isEnabled();
  console.log("is Enabled?" + enable);


  var existed = $('#dateOfBirthInput').isExisting();
  console.log("is Existed?" + existed);


  var checkboxisExisted = $("#hobbies-checkbox-1").isExisting();
  console.log("is checkboxExisted?" + checkboxisExisted);


  var getattribute = $("//input[@id='lastName']").getAttribute("type");
  console.log("getAttribute? " + getattribute);

  const cssprop = $("//input[@id='lastName']").getCSSProperty("text-align");
  console.log("getCSSProperty? " + cssprop);
  console.log("getCSSProperty? " + JSON.stringify(cssprop));

  var html=$("//form").getHTML();
  console.log("HTML returned as"+ html);


  var getProperty = $("//input[@id='lastName']").getProperty("name");
  console.log("property returned as:"+ getProperty);


  var getValue = $("#dateOfBirthInput").getValue("value");
  console.log("property returned as:"+ getValue);


  var getText = $("#dateOfBirthInput").getText();
  console.log("property returned as:"+ getText);

  
});

Then(/^I csn print those element property status$/, function () {

});