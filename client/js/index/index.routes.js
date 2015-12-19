(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('frontend.index', {
                meta: {
                    title: 'Test This To The Auto Dealership | Interface Agency',
                    description: 'This is the description shown in Google search results'
                },
                abstract: true,
                url: '',
                views: {
                    'page': {
                        templateUrl: 'index/index.html',
                        controller: 'Index'
                    },
                }
            })
            .state('frontend.index.content', {
                url: '/',
                views: {},
            })
            // .state('frontend.index.text', {
            //     url: '/text',
            //     views: {
            //         'page': {
            //             templateUrl: 'index/index.html',
            //             controller: 'Index'
            //         },
            //         // 'modal': {
            //         //     templateUrl: 'index/index.text.modal.html',
            //         //     controller: 'TextModal'
            //         // },
            //     },
            // });
            // .state('frontend.index.email', {
            //     url: '/email',
            //     views: {
            //         'page': {
            //             templateUrl: 'index/index.html',
            //             controller: 'Index'
            //         },
            //         'modal': {
            //             templateUrl: 'index/index.email.modal.html',
            //             controller: 'EmailModal'
            //         },
            //     },
            // })
            // .state('frontend.index.save', {
            //     data : { title: ''},
            //     url: '/save',
            //     views: {
            //         'page': {
            //             templateUrl: 'index/index.html',
            //             controller: 'Index'
            //         },
            //         'modal': {
            //             templateUrl: 'index/index.save.modal.html',
            //             controller: 'SaveModal'
            //         },
            //     },
            // })
            // .state('frontend.index.print', {
            //     data : { title: ''},
            //     url: '/print',
            //     views: {
            //         'page': {
            //             templateUrl: 'index/index.html',
            //             controller: 'Index'
            //         },
            //         'modal': {
            //             templateUrl: 'index/index.print.modal.html',
            //             controller: 'PrintModal'
            //         },
            //     },
            // });
    }

    angular
        .module('app.index')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
