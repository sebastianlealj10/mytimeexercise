var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var SearchPage = require("../pages/search_page.js");
var SearchSteps = function() {
  this.When('I select $service', async function (service) {
    resultsList = await SearchPage.selectService(service);
  });

  this.Then('I get $firstresult, $secondresult and $thirdresult', async function (firstresult, secondresult, thirdresult) {
    resultsList = await SearchPage.getResults();
    expect(resultsList).to.include.members([firstresult, secondresult, thirdresult]);
  });
}
module.exports = SearchSteps;