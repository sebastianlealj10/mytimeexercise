const { browser } = require("protractor");

var CustomersPage = function() {

  var business = element.all(by.css('.ui-autocomplete-input'));
  var searchButton = element(by.css('.flat-blue-btn'));
  this.get = async function() {
    await browser.waitForAngularEnabled(false)
    await browser.get('https://www.mytime.com/consumers');
  };

  this.business = async function(value) {
    try {
      await business.get(2).sendKeys("haircut");
    } catch (error) {
      throw error
    }
    
  };

  this.location = async function(value) {
    try {
      await business.get(3).sendKeys("San Francisco California");
    } catch (error) {
      throw error
    }
    
  };

  this.searchButton = async function() {
    try {
      await searchButton.click();
    } catch (error) {
      throw error
    }
    
  };
};

module.exports = new CustomersPage();
