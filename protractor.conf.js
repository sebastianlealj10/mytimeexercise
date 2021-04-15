exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'features/*.feature'
  ],
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    format: 'pretty'
  },
  onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  }
}
