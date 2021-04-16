const { browser } = require("protractor");

var SearchPage = function() {

  const searchResults = $$('.business-name > a');
  var EC = protractor.ExpectedConditions;
  var results = []
  this.getResults = async function() {
    await browser.wait(EC.presenceOf(searchResults), 5000);
    const count = await searchResults.count();
    for (let index = 0; index < count; index++) {
      const result = await searchResults.get(index).getText();
      results.push(result);
    }
    return results;
  };

  this.selectService = async function(service) {
    await browser.wait(EC.presenceOf(searchResults), 5000);
    const count = await searchResults.count();
    let servicePresent = undefined;
    for (let index = 0; index < count; index++) {
      const result = await searchResults.get(index).getText();
      if (result == service) {
        servicePresent = index;
      }
    }
    await browser.wait(EC.presenceOf(searchResults.get(servicePresent)), 5000);
    await searchResults.get(servicePresent).click();
  };
}
module.exports = new SearchPage();
