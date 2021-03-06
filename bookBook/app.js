/**
 * Created by x on 10/23/15.
 */



var app = angular.module('bookBook', ['ngAnimate', 'ui.router']);


app.config(function($httpProvider){
    //enable cross domain calls:
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('showcase', {
          url: '/',
          templateUrl: 'views/showcase.html',
          controller: 'showcaseController'
        })

        .state('landing', {
            url: '/landing',
            templateUrl: 'views/landing.html',
            controller: 'landingController'
        })

        .state('profile', {
            url: '/profile/:userName',
            templateUrl: 'views/profile.html',
            controller: 'profileController'
        })

                .state('profile.sellView',{
                  url:'/sellView',
                  templateUrl: 'views/profileSubViews/sellView.html'
                })
                .state('profile.wishView',{
                  url:'/wishView',
                  templateUrl: 'views/profileSubViews/wishView.html'
                })

        .state('buySearch', {
            url:'/buySearch',
            templateUrl: 'views/buySearch.html',
            controller: 'buySearchController'

        })

        .state('sellSearch', {
            url:'/sellSearch',
            templateUrl: 'views/sellSearch.html',
            controller: 'sellSearchController'

        })

        .state('buySearchResults', {
            url:'/buySearchResults',
            templateUrl: 'views/buySearchResults.html',
            controller: 'buySearchResultsController'
        })

        .state('sellSearchResults', {
            url:'/sellSearchResults',
            templateUrl: 'views/sellSearchResults.html',
            controller: 'sellSearchResultsController'
        })

        .state('bookManager', {
          url:'/bookmanager',
          templateUrl: 'views/bookManager.html',
          controller: 'bookManagerController'
        })
        .state('bookList', {
            url:'/bookList',
            templateUrl: 'views/bookList.html',
            controller: 'BookcontrollerCtrl'
        })
        .state('book', {
            url: '/book/:isbn',
            templateUrl: 'views/book.html',
            controller: 'bookController'
        })
        .state('newUserSetup', {
            url:'/newUserSetup',
            templateUrl: 'views/newUserSetup.html',
            controller: 'newUserSetupController'
      })

      .state('odinLoginPage', {
        url:'/odinLogin',
        templateUrl: 'views/odinLoginPage.html'
      });



});
















