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
          templateUrl: 'views/showcase.html'
        })

        .state('landing', {
            url: '/landing',
            templateUrl: 'views/landing.html',
            controller: 'landingController'
        })

        .state('profile', {
            url: '/profile',
            templateUrl: 'views/profile.html',
            controller: 'profileController'
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






    /*
            .state('listPage', {
                url: '/listPage',
                templateUrl: 'views/listPage.html',
                controller: 'listPageController'
            })

            .state('listPageTutorView', {
                url: '/listPageTutorView',
                templateUrl: 'views/listPageTutorView.html',
                //controller: 'listPageController'
            })

            //nested view of listpage - multi-step form for creating a new help list entry
            .state('listPage.newEntryForm',{

                url: '/newListEntryForm',
                templateUrl: 'views/newListEntryForm/newEntryForm.html'
            })

            .state('listPage.newEntryForm.selectCourse',{
                url: '/selectCourse',
                templateUrl: 'views/newListEntryForm/selectCourse.html'

            })
            .state('listPage.newEntryForm.selectLocation',{
                url: '/selectLocation',
                templateUrl: 'views/newListEntryForm/selectLocation.html'

            })
            .state('listPage.newEntryForm.confirm',{
                url: '/confirm',
                templateUrl: 'views/newListEntryForm/confirm.html'

            })

            */
});
















