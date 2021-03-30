const assert = require('assert');
const { Given, When, Then } = require('cucumber');
// describe('webdriver.io page', () => {
// it('validate isElementdisplayed, isElement Enable or selected', () => {
// browser.url("https://demoqa.com/automation-practice-form");
// var firstname = $('#firstName').isDisplayed();
// console.log("isDispalyed ? " + firstname);
// })
// })

Given(/^I'm on the registration form page$/, function () {
  browser.url("https://demoqa.com/automation-practice-form");
});

When(/^validate isElementdisplayed, isElement Enable or selecteted$/, function () {
  var firstnamedisplayed = $('#firstName').isDisplayed();
  console.log("isDispalyed ? " + firstnamedisplayed);
  // var lastnameenable = $('#lastName').isEnabled();
  var lastnameenabled = $("//input[@id='lastName']").isEnabled();
  console.log("isenabled? " + lastnameenabled);


  // var genderselected = $('#gender-radio-1').isSelected();
  var genderselected = $('input#gender-radio-1').isSelected();
  console.log("isSelected? " + genderselected);
  // var genderselected = $('//*[@id="gender-radio-1"]').isSelected();
  // console.log("isSelected? " + genderselected);

  // $('#gender-radio-1').click();
  // console.log("is selected ? "+$('#gender-radio-1').isSelected());


  var enable = $('#dateOfBirthInput').isEnabled();
  console.log("is Enabled?" + enable);


  var existed = $('#dateOfBirthInput').isExisting();
  console.log("is Existed?" + existed);

  // var isExisted = $(".custom-control-label::after").isExisted();
  var checkboxisExisted = $("#hobbies-checkbox-1").isExisting();
  // var isExisted = $("//input[@id='hobbies-checkbox-1']").isExisted();
  //note--type error: (...).isExisted()is not a function.
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