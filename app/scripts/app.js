'use strict';

/**
 * @ngdoc overview
 * @name cdkhackathonApp
 * @description
 * # cdkhackathonApp
 *
 * Main module of the application.
 */
var app = angular.module('bookBook', ['ngAnimate', 'ui.router', 'mp.autoFocus']);


app.config(function($httpProvider){
  //enable cross domain calls:
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/landing');

  $stateProvider

    .state('landing', {
      url: '/landing',
      templateUrl: 'app/views/landing.html',
      controller: 'landingController'
    })

    .state('profile', {
      url: '/profile',
      templateUrl: 'app/views/profile.html',
      controller: 'profileController'
    })

});
