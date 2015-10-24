app.directive('book', ['$parse', function ($parse) {

    function link(scope, element, attrs) {
        if (attrs.editing) {
            var getEditing = $parse(attrs.editing);
            var setEditing = getEditing.assign;
            scope.$watch(
                function watchEditing() {
                    return getEditing(scope.$parent);
                },
                function updateEditing(value) {
                    scope.editing = value
                }
            );
            scope.editing = getEditing ? getEditing(scope.$parent) : false;
        }
        scope.$watch('editing', function(value) {
            if(setEditing) {
                setEditing(scope.$parent, value)
            }
        })
    }

    return {
        restrict: 'A',
        scope: {
            book: '='
        },
        link: link,
        templateUrl: 'views/templates/book.html'
    };
}]);