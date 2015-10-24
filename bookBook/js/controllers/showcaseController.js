app.controller('showcaseController', ['$scope', 'mockService', function($scope, mockService ){

  $scope.login = function () {
    mockService.login();
  }
}]);
