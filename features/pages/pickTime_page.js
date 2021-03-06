'use strict';
import { browser } from "protractor";

class PickTimePage {
  constructor() {

    const openTime = $$('.opentime-item');
    const serviceName = $('.variation-name');
    const servicePrice = $('.normal-price');
    const serviceDuration = $('.duration-copy');
    var EC = protractor.ExpectedConditions;

    this.getOpenTimes = async () => {
      await browser.wait(EC.presenceOf(openTime), 5000);
      const times = await openTime.count();
      return times;
    };

    this.getServiceInfo = async () => {
      let info = [];
      await browser.wait(EC.presenceOf(serviceName), 5000);
      const Name = await serviceName.getText();
      info.push(Name);
      const Price = await servicePrice.getText();
      info.push(Price);
      const Duration = await serviceDuration.getText();
      info.push(Duration);
      return info;
    };

  }
}
export default new PickTimePage();
