const { browser } = require("protractor");

var BookModalPage = function() {

  const selectTimeButton = $('button[data-automation*="addonModal.selectTime"]');
  var EC = protractor.ExpectedConditions;
  
  this.selectTime = async function() {
    await browser.wait(EC.presenceOf(selectTimeButton), 5000);
    await selectTimeButton.click();
  };
  
}
module.exports = new BookModalPage();
