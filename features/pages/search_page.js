'use strict';
import { browser } from "protractor";

class SearchPage {
  constructor() {

    const searchResults = $$('.business-name > a');
    var EC = protractor.ExpectedConditions;
    var results = [];

    this.getResults = async () => {
      await browser.wait(EC.presenceOf(searchResults), 5000);
      const count = await searchResults.count();
      for (let index = 0; index < count; index++) {
        const result = await searchResults.get(index).getText();
        results.push(result);
      }
      return results;
    };

    this.selectService = async (service) => {
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
}
export default new SearchPage();
