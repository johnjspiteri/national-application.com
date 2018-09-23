(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider.state('frontend.privacy', {
            url: 'privacy',
            views: {
                'page@': {
                    templateUrl: '/public/html/privacy/privacy.html'
                }
            }
        });
    }

    angular.module('app.privacy').config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];
})();
