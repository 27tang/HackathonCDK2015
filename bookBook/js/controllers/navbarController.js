app.controller('navbarController', ['$scope', '$state', 'mockService', function($scope, $state, mockService ){

  $scope.query = "";
  $scope.onSearchPage = false;

  mockService.getBooks();

  $scope.$watch(function () { return $state.current; }, function (newState) {
    if (newState === undefined) return;
    $scope.onSearchPage = !!(newState.name === 'buySearch' || newState.name === 'sellSearch');
  });

  $scope.submit = function () {
    mockService.search($scope.query);
    $state.go('buySearchResults');
  };
}]);
