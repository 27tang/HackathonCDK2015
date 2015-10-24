app.controller('buySearchResultsController', ['$scope', '$state', 'mockService', function($scope, $state, mockService ){

  //$scope.isbn = $state.params.isbn;
  //$scope.editing = false;
  //$scope.creating = false;
  $scope.results = mockService.getSearchResults();

  $scope.$watch(function () {
    return mockService.getSearchResults();
  }, function (newResults) {
    $scope.results = newResults;
  });
  //mockService.getBooks().then(function () {
  //  var book = mockService.getBookByISBN(parseInt($scope.isbn));
  //  if (book) {
  //    $scope.book = book;
  //    // TODO: Editing switch?
  //  } else {
  //    $scope.creating = true;
  //    $scope.book = {isbn: parseInt($scope.isbn)};
  //  }
  //});
}]);
