var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
const { browser } = require('protractor');
var Checkoutpage = require("../pages/checkout_page.js");
var BookModalpage = require("../pages/bookModal_page.js");
var CheckoutSteps = function() {
  this.When('I pick All Services and Master Yoda', async function () {
    await Checkoutpage.selectFilterByService();
    await Checkoutpage.selectFilterByStaffMemeber();
  });
  this.When('I book Men\'s Haircut and select time', async function () {
    await Checkoutpage.clickBookButton();
    await BookModalpage.selectTime();
    await browser.sleep(4000);

  });
}
module.exports = CheckoutSteps;