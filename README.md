# Aurelia Movies App
Project 4 of our Bootcamp, we decided to create a movie app that could keep track of popular movies and also allow people to keep track of them via a wish list. After hearing a little about Aurelia, we decided to dabble a little more into it and learn about its functions.

## Technologies Used
1. [Aurelia Skeleton Navigation](http://aurelia.io/docs.html#/aurelia/framework/1.0.0-beta.1.1.1/doc/article/a-production-setup)
1. [Auth0](https://auth0.com/)
1. [TMDB API](https://www.themoviedb.org/?language=en)

## Installation Steps
### Dependencies
Install all devdependencies
```
npm install
```
Install Aurelia libraries, bootstrap, font-awesome and other dependencies
```
npm install -g jspm
```
### To run App
```
gulp watch
```
### To run E2E testing
Install necessary webdriver
```
gulp webdriver -update
```
Ensure app running and accessible
```
gulp watch
```
Run tests
```
gulp e2e
```
## Quick Benefits of Aurelia
The power of Aurelia lies in the use of ES6 features like modules and classes. The polyfills are also added in for browsers that still don't support these features.

## Areas to be improved
1. E2E testing attempted but not completed
1. Unit testing not done
1. CRUD for adding to wish list not done
1. iframe for trailers

## Contributors
[shawnlimws](https://github.com/shawnlimws) & [weejh](https://github.com/weejh)
