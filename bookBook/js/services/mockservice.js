'use strict';

app.service('mockService', function ($http, $q) {
    this.getBooks = function () {
        var def = $q.defer();
        $http.get('data/books.json').success(function (data) {
            def.resolve(data);
        });

        return def.promise;
    };

    this.getUsers = function () {
        var def = $q.defer();
        $http.get('data/users.json').success(function (data) {
            def.resolve(data);
        });

        return def.promise;
    };
});
