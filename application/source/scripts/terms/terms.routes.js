(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider.state('frontend.terms', {
            url: 'terms',
            views: {
                'page@': {
                    templateUrl: '/public/html/terms/terms.html'
                }
            }
        });
    }

    angular.module('app.terms').config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];
})();
