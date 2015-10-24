app.controller('buySearchController', ['$scope', '$state', 'mockService', function($scope, $state, mockService){
  $scope.query = "";

  $scope.submit = function () {
    mockService.search($scope.query);
    $state.go('buySearchResults');
  };
}]);
