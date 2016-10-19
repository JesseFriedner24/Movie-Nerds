(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('SearchCtrl', SearchCtrl);

    SearchCtrl.$inject = ['MovieSearch'];

    /* @ngInject */
    function SearchCtrl(MovieSearch) {
        var search = this;
        search.getMovie = getMovie;
        search.title;



        ////////////////
        // Will get data to display searched movie's info
        function getMovie() {
            return MovieSearch.getMovie(search.title).then(
                function(data) {
                    search.movies = data.Search;

                },
                function(error) {
                    console.log(error);
                });
        }
    }
})();
