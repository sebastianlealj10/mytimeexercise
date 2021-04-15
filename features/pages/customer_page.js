const { browser } = require("protractor");

var CustomersPage = function() {

  const business = element.all(by.css('.ui-autocomplete-input')).get(2);
  const location = element.all(by.css('.ui-autocomplete-input')).get(3);
  const searchButton = element(by.css('.flat-blue-btn'));
  this.get = async function() {
    await browser.waitForAngularEnabled(false)
    await browser.get('https://www.mytime.com/consumers');
  };

  this.fillBusiness = async function(value) {
    try {
      await business.sendKeys(value);
    } catch (error) {
      throw error
    }
    
  };

  this.fillLocation = async function(value) {
    try {
      await location.clear();
      await location.sendKeys(value);
    } catch (error) {
      throw error
    }
    
  };

  this.clickSearchButton = async function() {
    try {
      await searchButton.click();
    } catch (error) {
      throw error
    }
    
  };
};

module.exports = new CustomersPage();
