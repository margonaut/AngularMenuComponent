//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(bower_components)/**/*!(.module|.spec).js',
      '**/*.spec.js',
      'components/**/*.js',
      'components/**/*.template.html',
      'components/**/*.html'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    
    preprocessors: {
      "**/*.html": ["ng-html2js"]
      // "components/menu-item/menu-item.template.html": ["ng-html2js"]
      // "components/my-menu/my-menu.template.html": ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {
      
      stripPrefix: 'app/',
      
        // create module to access template files
        moduleName: "templates"
    },


  });
};
