'use strict';

/**
 * @ngdoc function
 * @name bookBook.controller:BookcontrollerCtrl
 * @description
 * # BookcontrollerCtrl
 * Controller of the bookBook
 */
app.controller('BookcontrollerCtrl', ['$scope', 'mockService', function ($scope, mockService) {
    mockService.getBooks().then(function(data){
        $scope.books = data;
        console.log($scope.books);
    });
}]);
