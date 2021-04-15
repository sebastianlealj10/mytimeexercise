const { browser } = require("protractor");

var SearchPage = function() {

  const searchResults = $$('.business-name > a');
  var EC = protractor.ExpectedConditions;
  var results = []
  this.getResults = async function() {
    await browser.wait(EC.presenceOf(searchResults), 5000);
    const count = await searchResults.count()
    for (let index = 0; index < count; index++) {
      result = await searchResults.get(index).getText();
      results.push(result);
      }
    return results;
  };
}
module.exports = new SearchPage();
