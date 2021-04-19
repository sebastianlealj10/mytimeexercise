exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  allScriptsTimeout: 10000,
  specs: [
    'features/*.feature'
  ],
  SELENIUM_PROMISE_MANAGER: false,
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    format: 'pretty'
  },
  onPrepare: function () {
    require("@babel/register");
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  },
}
