'use strict';

import { browser } from "protractor";

class CheckoutPage {
  constructor() {

    const allServices = $('fieldset > label:nth-child(1)');
    const masterYoda = $('section.staff-member > fieldset > label:nth-child(2)');
    const mensHaircutButton = $('button[aria-label*="Book Service Men\'s"]');
    const services = $$('.service-category .variation-item .variation-title-content');
    const durations = $$('.service-category .variation-item .variation-duration');
    const prices = $$('.service-category .variation-item .normal-price');
    var EC = protractor.ExpectedConditions;

    this.selectFilterByService = async () => {
      await browser.wait(EC.presenceOf(allServices), 5000);
      await allServices.click();
    };

    this.selectFilterByStaffMemeber = async () => {
      await browser.wait(EC.presenceOf(masterYoda), 5000);
      await masterYoda.click();
    };

    this.clickBookButton = async () => {
      await browser.wait(EC.presenceOf(masterYoda), 5000);
      await mensHaircutButton.click();

    };

    this.getServiceInfo = async (service) => {
      let info = [];
      await browser.wait(EC.presenceOf(services), 5000);
      const count = await services.count();
      let servicePresent = undefined;
      for (let index = 0; index < count; index++) {
        const result = await services.get(index).getText();
        if (result == service) {
          servicePresent = index;
        }
      }
      await browser.wait(EC.presenceOf(services.get(servicePresent)), 5000);
      const serviceName = await services.get(servicePresent).getText();
      info.push(serviceName);
      const serviceDuration = await durations.get(servicePresent).getText();
      info.push(serviceDuration);
      const servicePrice = await prices.get(servicePresent).getText();
      info.push(servicePrice);
      return info;
    };

  }
}
export default new CheckoutPage();
