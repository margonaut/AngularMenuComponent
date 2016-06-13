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
      'components/**/*.template.html'
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
      // "**/*.html": ["ng-html2js"]
      "components/menu-item/menu-item.template.html": ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {
      
      stripPrefix: 'app/',
      // prependPrefix: '/',
      // moduleName: 'templates'
        // If your build process changes the path to your templates,
        // use stripPrefix and prependPrefix to adjust it.
        // stripPrefix: "source/path/to/templates/.*/",
        // prependPrefix: "web/path/to/templates/",

        // the name of the Angular module to create
        moduleName: "templates"
    },


  });
};
