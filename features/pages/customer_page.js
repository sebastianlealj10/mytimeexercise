'use strict';

import { browser } from "protractor";

class CustomersPage {
  constructor() {

    const business = element.all(by.css('.ui-autocomplete-input')).get(2);
    const location = element.all(by.css('.ui-autocomplete-input')).get(3);
    const searchButton = element(by.css('.flat-blue-btn'));
    this.get = async function () {
      await browser.waitForAngularEnabled(false);
      await browser.get('https://www.mytime.com/consumers');
    };

    this.fillBusiness = async (value) => {
      try {
        await business.sendKeys(value);
      } catch (error) {
        throw error;
      }

    };

    this.fillLocation = async (value) => {
      try {
        await location.clear();
        await location.sendKeys(value);
      } catch (error) {
        throw error;
      }

    };

    this.clickSearchButton = async () => {
      try {
        await searchButton.click();
      } catch (error) {
        throw error;
      }

    };
  }
}

export default new CustomersPage();
