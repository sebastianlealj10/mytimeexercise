var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
import CheckoutPage from "../pages/checkout_page.js";
import BookModalPage from "../pages/bookModal_page.js";
import PickTime from "../pages/pickTime_page.js";
let serviceInfo = [];

var CheckoutSteps = function() {
  this.When('I pick All Services and Master Yoda', async () => {
    await CheckoutPage.selectFilterByService();
    await CheckoutPage.selectFilterByService();
    await CheckoutPage.selectFilterByStaffMemeber();
  });
  this.When('I book $serviceName and select time', async (serviceName) => {
    await CheckoutPage.clickBookButton();
    serviceInfo = await CheckoutPage.getServiceInfo(serviceName);
    await BookModalPage.chooseTime();

  });
  this.Then('There are more than two times available and the service info matches', async () => {
    const times = await PickTime.getOpenTimes();
    const info = await PickTime.getServiceInfo();
    expect(times).greaterThan(2);
    expect(info).to.have.members(serviceInfo)
  });
}
export default CheckoutSteps;