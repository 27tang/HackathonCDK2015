app.controller('profileController', ['$scope', '$state', 'mockService', function ($scope, $state, mockService) {

    $scope.user = {};
    $scope.userName = $state.params.userName;
    mockService.getUsers().then(function (users) {

        mockService.getBooks().then(function () {
            $scope.user = mockService.getUserFromName($scope.userName);
            $scope.buyingList = [];
            $scope.sellingList = [];
            $scope.bookList = $scope.user.books.map(function (index) {
                var book = mockService.getBookByISBN(index);
                if(book.status == 'buying'){
                    $scope.buyingList.push(book);
                }
                else if(book.status = 'selling'){
                    $scope.sellingList.push(book);
                }
                return book;
            });
        });
    });

    $scope.expand = function () {
        angular.element(document.querySelectorAll('.sellView')).toggleClass('sideBookViewExpand');
    };
}]);
