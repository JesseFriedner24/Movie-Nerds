(function() {
    'use strict';


    angular
        .module('myApp', ['ui.router'])
        .config(function($urlRouterProvider, $stateProvider) {
            // Router Provider
            $urlRouterProvider.otherwise('/search');

            $stateProvider
            // Search Page
                .state('search', {
                    url: '/search',
                    templateUrl: 'apps/movie.search.html',
                    controller: "SearchCtrl",
                    controllerAs: 'search'
                })
                // Detail Page
                .state('detail', {
                    url: '/detail/:movieId',
                    templateUrl: 'apps/movie.detail.html',
                    controller: 'DetailCtrl',
                    controllerAs: 'detail'
                })
        });
})();
