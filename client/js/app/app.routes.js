(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('index', {
                url: '',
                abstract: true,
                views: {
                    'index': {
                        templateUrl: 'front/index.html',
                    },
                }
            })
            .state('index.start', {
                data : { title: ''},
                url: '/',
                views: {
                    'container@index': {
                        templateUrl: 'front/partials/index.html',
                    },
                },
            })
            .state('index.answers', {
                data : { title: ''},
                url: '/answers/',
                views: {
                    'container@index': {
                        templateUrl: 'front/partials/answers.html',
                    },
                },
            });
    }

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
