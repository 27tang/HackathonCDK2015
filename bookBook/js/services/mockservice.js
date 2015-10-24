'use strict';

app.service('mockService', function ($http, $q) {
    var bookList = [];
    var userList = [];

    this.getBooks = function () {
        var def = $q.defer();
        $http.get('data/books.json').success(function (data) {
            def.resolve(data);
            bookList = _.union(data, bookList);
        });
        return def.promise;
    };

    this.getUsers = function () {
        var def = $q.defer();
        $http.get('data/users.json').success(function (data) {
            def.resolve(data);
            userList = _.union(data, userList);
        });

        return def.promise;
    };

    this.addBook = function (book, username) {
        bookList.push(book);
        for (var i = 0; i < userList.length; i++){
            if(userList[i].username == username){
                userList[i].books.push(book.isbn);
            }
        };
    };

    this.addUser = function (user) {
        userList.push(user);
    };


    this.getUserFromName = function(userName) {
      for (var i = 0; i < userList.length; i++){
        if(userList[i].username == userName){
          return userList[i];
        }
      };
    }
});
