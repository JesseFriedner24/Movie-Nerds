(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('DetailCtrl', DetailCtrl);

    DetailCtrl.$inject = ['MovieSearch', '$stateParams'];

    /* @ngInject */
    function DetailCtrl(MovieSearch, $stateParams) {
        var detail = this;

        //Will get data to display the chosen movie's details
        MovieSearch.getMovieDetail($stateParams.movieId).then(
            function(data) {
                detail.data = data;
            },
            function(error) {
                console.log(error);
            });
    }
})();
