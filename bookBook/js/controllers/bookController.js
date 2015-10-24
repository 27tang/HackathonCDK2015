app.controller('bookController', ['$scope', '$state', 'mockService', function($scope, $state, mockService ){

  $scope.isbn = $state.params.isbn;
  $scope.editing = false;
  $scope.creating = false;
  mockService.getBooks().then(function () {
    var book = mockService.getBookByISBN(parseInt($scope.isbn));
    if (book) {
      $scope.book = book;
      // TODO: Editing switch?
    } else {
      $scope.creating = true;
      $scope.book = {isbn: parseInt($scope.isbn)};
    }
  });
}]);
