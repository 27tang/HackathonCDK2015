'use strict';

/**
 * @ngdoc function
 * @name bookBook.controller:BookcontrollerCtrl
 * @description
 * # BookcontrollerCtrl
 * Controller of the bookBook
 */
angular.module('bookBook')
  .controller('BookcontrollerCtrl'['$scope', 'mockService', function ($scope, mockService) {
    $scope.books= mockService.getBooks();
    console.log(books);
  }]);
