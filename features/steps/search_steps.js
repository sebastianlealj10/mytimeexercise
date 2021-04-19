var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
import SearchPage from "../pages/search_page.js";

var SearchSteps = function() {
  this.When('I select $service', async (service) => {
    await SearchPage.selectService(service);
  });

  this.Then('I get $firstresult, $secondresult and $thirdresult', async (firstresult, secondresult, thirdresult) => {
    const resultsList = await SearchPage.getResults();
    expect(resultsList).to.include.members([firstresult, secondresult, thirdresult]);
  });
}
export default SearchSteps;