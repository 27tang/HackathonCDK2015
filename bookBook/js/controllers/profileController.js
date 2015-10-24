app.controller('profileController', function($scope, $state, $stateParams){

    $scope.userName = $state.params.userName;
    console.log($scope.userName);


    $scope.name = "John";
    $scope.courseInfo = "Current courses: CS201, CS163";


});
