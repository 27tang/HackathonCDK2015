app.controller('landingController',['$scope', 'mockService', function($scope, mockService){
    $scope.bookList = [];
    mockService.getBooks().then(function(data) {
        $scope.bookList = data;
    });
}]);