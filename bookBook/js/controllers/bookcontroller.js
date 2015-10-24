'use strict';

/**
 * @ngdoc function
 * @name bookBook.controller:BookcontrollerCtrl
 * @description
 * # BookcontrollerCtrl
 * Controller of the bookBook
 */
app.controller('BookcontrollerCtrl', ['$scope', 'mockService', function ($scope, mockService) {
    mockService.getBooks().then(function (data) {
        $scope.books = data;
    });
    mockService.getUsers().then(function (data) {
        $scope.users = data;
    });

    $scope.addUser = function (username, name, major, course_history) {
        var user = {
            "username": username,
            "name": name,
            "major": major,
            "course_history": course_history,
            "books": []
        };

        mockService.addUser(user);
    };

    $scope.addBook = function (title, isbn, author, condition, price, status){
        var book = {
            "title": title,
            "isbn": isbn,
            "author": author,
            "condition": condition,
            "price": price,
            "status": status
        };

        mockService.addBook(book);
    };
}]);
