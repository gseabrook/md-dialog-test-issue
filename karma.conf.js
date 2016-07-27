module.exports = function(config) {
    config.set({

        basePath: './',

        files: [
            'angular/angular.js',
            'angular/angular-aria.js',
            'angular/angular-mocks.js',
            'angular/angular-material.js',
            'angular/angular-material-mocks.js',
            'angular/angular-animate.js',

            'app.js',
            'dialog-spec.js',
            'select-spec.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ]
    });
};