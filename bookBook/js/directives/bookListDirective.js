app.directive('bookList', ['$parse', function ($parse) {

    function link(scope, element, attrs) {
        if (attrs.editable) {
            var getEditable = $parse(attrs.editable);
            var setEditable = getEditable.assign;
            scope.$watch(
                function watchEditable() {
                    return getEditable(scope.$parent);
                },
                function updateEditable(value) {
                    scope.editable = value
                }
            );
            scope.editable = getEditable ? getEditable(scope.$parent) : false;
        }
        scope.$watch('editable', function(value) {
            if(setEditable) {
                setEditable(scope.$parent, value)
            }
        })
    }

    return {
        restrict: 'E',
        scope: {
            books: '='
        },
        link: link,
        //compile: compile,
        templateUrl: 'views/templates/bookList.html'
    };
}]);