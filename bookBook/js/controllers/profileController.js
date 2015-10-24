app.controller('profileController', ['$scope', '$state', 'mockService', function($scope, $state, mockService ){

    $scope.user = {};
    $scope.userName = $state.params.userName;
    mockService.getUsers().then(function(users){

      mockService.getBooks().then(function(){
        $scope.user = mockService.getUserFromName($scope.userName);
        $scope.bookList = $scope.user.books.map(function(index){
          console.log(index);
          return mockService.getBookByISBN(index);
        });

        console.log($scope.bookList);

      });






      //console.log(mockService.getUserFromName($scope.userName));
    });

    $scope.expand = function(){
      angular.element(document.querySelectorAll('.sellView')).toggleClass('sideBookViewExpand');
      console.log("hapend");
    };


}]);
