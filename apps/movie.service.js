(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('MovieSearch', MovieSearch);

    MovieSearch.$inject = ['$http', '$q'];

    /* @ngInject */
    function MovieSearch($http, $q) {
        var service = {
            getMovie: getMovie,
            getMovieDetail: getMovieDetail
        };
        return service;

        ////////////////
        // Service for Movie Search page
        function getMovie(title) {
            var defer = $q.defer();
            // Will pull necessary data from api
            $http.get('http://www.omdbapi.com/?s=' + title).then(
                function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response.data);
                    } else {
                        defer.reject(response.data);
                    }
                },
                function(error) {
                    defer.reject(error);
                }
            );
            // Something went wrong
            return defer.promise;
        }

        ////////////////
        // Service for Movie Detail page
        function getMovieDetail(currentMovieId) {
            var defer = $q.defer();
            // will pull necessary data for chosen movie's details
            $http.get('http://www.omdbapi.com/?i=' + currentMovieId + '&plot=full&r=json').then(
                function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response.data);
                    } else {
                        defer.reject(response.data);
                    }
                },
                function(error) {
                    defer.reject(error);
                }
            );
            // Something went Wrong
            return defer.promise;
        }
    }
})();
