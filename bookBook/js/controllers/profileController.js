app.controller('profileController', ['$scope', '$state', 'mockService', function($scope, $state, mockService ){

    $scope.user = {};
    $scope.userName = $state.params.userName;
    mockService.getUsers().then(function(users){

      $scope.user = mockService.getUserFromName($scope.userName);
      //console.log(mockService.getUserFromName($scope.userName));
    });




}]);
