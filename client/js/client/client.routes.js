(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('frontend.client', {
                url: '/client',
                views: {
                    'page@': {
                        templateUrl: 'client/client.html',
                        controller: 'Client',
                    }
                }
            });
    }

    angular
        .module('app.client')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
