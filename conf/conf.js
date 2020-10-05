var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  directConnect: true,

  seleniumAddress: 'http://localhost:4444/wd/hub/',

  onPrepare: function () {

    browser.manage().window().maximize();

    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
  },

  // Capabilities to be passed to the webdriver instance.
  //multiple browsers for parallel execution

  multiCapabilities: [{
    'browserName': 'chrome'
  },
  {
    'browserName': 'firefox'
  }],


  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['C:\\Users\\aishwarya\\Desktop\\Protractor-Jasmine-Practice\\specs\\ShopTest.js',
  'C:\\Users\\aishwarya\\Desktop\\Protractor-Jasmine-Practice\\specs\\spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  }

};

