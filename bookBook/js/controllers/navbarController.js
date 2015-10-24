app.controller('navbarController', ['$scope', '$state', 'mockService', function($scope, $state, mockService ){

  $scope.query = "";
  $scope.loggedIn = false;
  $scope.onLoginPage = false;
  $scope.onSearchPage = false;

  mockService.getBooks();

  $scope.login = function () {
    mockService.login();
  };

  $scope.$watch(function () { return mockService.loggedIn(); }, function (loggedIn) {
    $scope.loggedIn = loggedIn == true;
  });

  $scope.$watch(function () { return mockService.getSearchQuery(); }, function (query) {
    $scope.query = query;
  });

  $scope.$watch(function () { return $state.current; }, function (newState) {
    if (newState === undefined) return;
    $scope.onLoginPage = newState.name === 'odinLoginPage';
    $scope.onSearchPage = !!(newState.name === 'buySearch' || newState.name === 'sellSearch');
  });

  $scope.submit = function () {
    mockService.search($scope.query);
    $state.go('buySearchResults');
  };
}]);
