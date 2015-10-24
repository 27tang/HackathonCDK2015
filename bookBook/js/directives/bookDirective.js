app.directive('book', ['$parse', function ($parse) {

    //function link(scope, element, attrs) {
    //    if (attrs.editing) {
    //        var getEditing = $parse(attrs.editing);
    //        var setEditing = getEditing.assign;
    //        scope.$watch(
    //            function watchEditing() {
    //                return getEditing(scope.$parent);
    //            },
    //            function updateEditing(value) {
    //                scope.editing = value
    //            }
    //        );
    //        scope.editing = getEditing ? getEditing(scope.$parent) : false;
    //    }
    //    scope.$watch('editing', function(value) {
    //        if(setEditing) {
    //            setEditing(scope.$parent, value)
    //        }
    //    });
    //  if (attrs.creating) {
    //    var getCreating = $parse(attrs.creating);
    //    var setCreating = getCreating.assign;
    //    scope.$watch(
    //      function watchCreating() {
    //        return getCreating(scope.$parent);
    //      },
    //      function updateCreating(value) {
    //        scope.creating = value
    //      }
    //    );
    //    scope.creating = getCreating ? getCreating(scope.$parent) : false;
    //  }
    //  scope.$watch('creating', function(value) {
    //    if(setCreating) {
    //      setCreating(scope.$parent, value)
    //    }
    //  });
    //}

    return {
        restrict: 'A',
        //scope: {
        //    book: '=',
        //    creating: '=',
        //    editing: '='
        //},
        //link: link,
        templateUrl: 'views/templates/book.html'
    };
}]);
