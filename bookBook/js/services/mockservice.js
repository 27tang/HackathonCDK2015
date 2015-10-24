'use strict';

angular.module('bookBook')
  .service('mockService', function ($http) {
    this.getBooks  = function() {
      return $http.get('../data/books.json');
    }
  });
