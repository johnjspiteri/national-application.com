(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('backend.list', {
                meta: {
                    title: '',
                    description: ''
                },
                url: '/list',
                views: {
                    'page@': {
                        templateUrl: '/public/html/account/account.list.html',
                        resolve: {
                            listResolve: [
                                'account',
                                function(account) {
                                    return account.query().$promise;
                                }
                            ]
                        },
                        controller: 'List'
                    }
                }
            })
            .state('backend.add', {
                meta: {
                    title: '',
                    description: ''
                },
                url: '/add',
                views: {
                    'page@': {
                        templateUrl: 'account/account.add.html',
                        controller: 'Add'
                    }
                }
            })
            .state('backend.edit', {
                meta: {
                    title: '',
                    description: ''
                },
                url: '/:id',
                views: {
                    'page@': {
                        templateUrl: 'account/account.edit.html',
                        resolve: {
                            itemResolve: [
                                '$stateParams',
                                'account',
                                function($stateParams, account) {
                                    var ItemId = $stateParams.id;
                                    return account.show({ id: ItemId }).$promise;
                                }
                            ]
                        },
                        controller: 'Edit'
                    }
                }
            });
    }

    angular.module('app.account').config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];
})();
