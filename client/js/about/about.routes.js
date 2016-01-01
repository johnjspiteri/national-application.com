(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('frontend.about', {
                url: '/about-us',
                views: {
                    'page@': {
                        templateUrl: 'about/about.html',
                        // controller: 'About',
                    },
                }
            });
    }

    angular
        .module('app.about')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
