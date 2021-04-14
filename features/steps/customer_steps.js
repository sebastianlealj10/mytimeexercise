var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var CustomersPage = require("../pages/customer_page.js");
var CustomerSteps = function() {
  this.Given('I go to MyTime custorms page', async function () {
    await CustomersPage.get();
  });

  this.When('I search for $service in $location', async  function (service, location) {
    await CustomersPage.business(service);
    await CustomersPage.location(location);
    await CustomersPage.searchButton();
  });
}
module.exports = CustomerSteps;