const { browser } = require("protractor");

var CheckoutPage = function() {

  const allServices = $('fieldset > label:nth-child(1)');
  const masterYoda = $('section.staff-member > fieldset > label:nth-child(2)');
  const mensHaircutButton = $('button[aria-label*="Book Service Men\'s"]');
  var EC = protractor.ExpectedConditions;

  this.selectFilterByService = async function() {
    await browser.wait(EC.presenceOf(allServices), 5000);
    await allServices.click();
  };

  this.selectFilterByStaffMemeber = async function() {
    await browser.wait(EC.presenceOf(masterYoda), 5000);
    await masterYoda.click();
  };

  this.clickBookButton = async function() {
    await browser.wait(EC.presenceOf(masterYoda), 5000);
    await mensHaircutButton.click();
  };
  
}
module.exports = new CheckoutPage();
