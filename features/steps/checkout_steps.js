var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var Checkoutpage = require("../pages/checkout_page.js");
var BookModalpage = require("../pages/bookModal_page.js");
var PickTime = require("../pages/pickTime_page.js");
let serviceInfo = [];
var CheckoutSteps = function() {
  this.When('I pick All Services and Master Yoda', async function () {
    await Checkoutpage.selectFilterByService();
    await Checkoutpage.selectFilterByStaffMemeber();
  });
  this.When('I book $serviceName and select time', async function (serviceName) {
    await Checkoutpage.clickBookButton();
    serviceInfo = await Checkoutpage.getServiceInfo(serviceName);
    await BookModalpage.selectTime();

  });
  this.Then('There are more than two times available and the service info matches', async function () {
    times = await PickTime.getOpenTimes();
    info = await PickTime.getServiceInfo();
    expect(times).greaterThan(2);
    expect(info).to.have.members(serviceInfo)
  });
}
module.exports = CheckoutSteps;