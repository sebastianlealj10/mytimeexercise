'use strict';
import { browser } from "protractor";

class BookModalPage {
  constructor() {

    const TimeButton = $('button[data-automation*="addonModal.selectTime"]');
    var EC = protractor.ExpectedConditions;

    this.chooseTime = async () => {
      await browser.wait(EC.presenceOf(TimeButton), 5000);
      await TimeButton.click();
    };

  }
}
export default new BookModalPage();
