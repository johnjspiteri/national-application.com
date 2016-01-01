(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('frontend', {
                url: '',
                abstract: true,
                resolve: {
                    statesResolve: ['$http', function($http) {
                        return $http({
                            method: 'GET', url: '/js/app/states.json'
                        });
                    }],
                },
                views: {
                    'header@': {
                        templateUrl: 'header/header.html',
                        controller: 'CommonController',
                    },
                     'footer@': {
                        templateUrl: 'footer/footer.html',
                    },
                }
            });
    }

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
