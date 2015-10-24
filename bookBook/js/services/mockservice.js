'use strict';

app.service('mockService', function ($http, $q) {
    var bookList = [];
    var userList = [];
    var searchResults = null;

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
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].username == username) {
                userList[i].books.push(book.isbn);
            }
        }
    };

    this.addUser = function (user) {
        userList.push(user);
    };

    this.getUserFromName = function (userName) {
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].username == userName) {
                return userList[i];
            }
        }
    };

    this.deleteBook = function (isbn) {
        for (var i = 0; i < bookList.length; i++) {
            if (bookList[i].isbn == isbn) {
                bookList.remove(i);
                return;
            }
        }
    };

    this.getBookByISBN = function (isbn) {
        for (var i = 0; i < bookList.length; i++) {
            if (bookList[i].isbn == isbn) {
                return bookList[i];
            }
        }
    };

    this.updateBook = function (title, isbn, author, condition, price, status) {
        for (var i = 0; i < bookList.length; i++) {
            if (bookList[i].isbn == isbn) {
                bookList[i] = {
                    "title": title,
                    "isbn": isbn,
                    "author": author,
                    "condition": condition,
                    "price": price,
                    "status": status
                };
            }
        }
    };

    this.search = function (query) {
        var results = [];
        for (var i = 0; i < bookList.length; i++) {
            if (fuzzy_match(bookList[i].isbn.toString(), query) || fuzzy_match(bookList[i].title, query)) {
                results.push(bookList[i]);
            }
        }
        searchResults = results;
    };

    // http://codereview.stackexchange.com/a/23905
    var fuzzy_match = (function(){
        var cache = _.memoize(function(str){
            return new RegExp("^"+str.replace(/./g, function(x){
                return /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/.test(x) ? "\\"+x+"?" : x+"?";
            })+"$");
        });
        return function(str, pattern){
            return cache(str).test(pattern) ||
              str.toLowerCase().search(pattern.toLowerCase()) > -1;
        };
    })();

    this.getSearchResults = function () {
        return searchResults;
    };

});
