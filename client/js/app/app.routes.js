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
                        controller: 'CommonController'
                    },
                }
            })
            .state('index.start', {
                data : { title: ''},
                url: '/',
                views: {
                    'container': {
                        templateUrl: 'front/partials/index.html',
                        controller: 'CommonIndexController'

                    },
                },
            })
            .state('index.answers', {
                data : { title: ''},
                url: '/answers/',
                views: {
                    'container': {
                        templateUrl: 'front/partials/answers.html',
                        controller: 'CommonAnswersController'

                    },
                },
            })
            .state('index.testimonials', {
                data : { title: ''},
                url: '/testimonials/',
                views: {
                    'container': {
                        templateUrl: 'front/partials/testimonals.html',
                    },
                },
            })
            .state('index.contact', {
                data : { title: ''},
                url: '/contact/',
                views: {
                    'container': {
                        templateUrl: 'front/partials/contact.html',
                    },
                },
            });
    }

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
