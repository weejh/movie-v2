var gulp = require('gulp');
var bundle = require('aurelia-bundler').bundle;

var config = {
  force: true,
  packagePath: '.',
  bundles: {
    "dist/app-build": {
      includes: [
        '**/*.css!text',
        '**/*.html!text',
        '**/*.js',
        'aurelia-bootstrapper',
        'aurelia-dependency-injection',
        'aurelia-framework',
        'aurelia-templating-binding',
        'aurelia-templating-resources',
        'aurelia-loader-default',
        'aurelia-fetch-client',
        'aurelia-router',
        'aurelia-templating-router',
        'aurelia-history-browser',
        'aurelia-logging-console',
        'aurelia-event-aggregator',
        'bootstrap',
        'moment'
      ],
      excludes: [
        'config.js'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  }
};
