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
                url: '/',
                views: {
                    'page@': {
                        templateUrl: 'index/index.html',
                        controller: 'Index'
                    },
                }
            })
            .state('frontend.index.text', {
                url: 'text-a-free-rx-card',
                views: {
                    'page@': {
                        templateUrl: 'index/index.html',
                        controller: 'Index'
                    },
                    'modal@': {
                        templateUrl: 'index/index.text.modal.html',
                        controller: 'IndexTextModal'
                    },
                },
            })
            .state('frontend.index.email', {
                url: 'email-a-free-rx-card',
                views: {
                    'page@': {
                        templateUrl: 'index/index.html',
                        controller: 'Index'
                    },
                    'modal@': {
                        templateUrl: 'index/index.email.modal.html',
                        controller: 'IndexEmailModal'
                    },
                },
            })
            .state('frontend.index.save', {
                url: 'save-a-free-rx-card',
                views: {
                    'page@': {
                        templateUrl: 'index/index.html',
                        controller: 'Index'
                    },
                    'modal@': {
                        templateUrl: 'index/index.save.modal.html',
                        controller: 'IndexSaveModal'
                    },
                },
            })
            .state('frontend.index.print', {
                url: 'print-a-free-rx-card',
                views: {
                    'container': {
                        templateUrl: 'index/index.html',
                        controller: 'Index'
                    },
                    'modal@': {
                        templateUrl: 'index/index.print.modal.html',
                        controller: 'IndexPrintModal'
                    },
                },
            });
    }
    
    angular
        .module('app.index')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
