import CustomersPage from "../pages/customer_page.js";
var CustomerSteps = function() {
  this.Given('I go to MyTime custorms page', async () => {
    await CustomersPage.get();
  });

  this.When('I search for $service in $location', async  (service, location) => {
    await CustomersPage.fillBusiness(service);
    await CustomersPage.fillLocation(location);
    await CustomersPage.clickSearchButton();
  });
}
export default CustomerSteps;