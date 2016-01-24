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
                resolve: {
                    listResolve: ['account', function(account) {
                        return account.query().$promise;
                    }],
                },
                views: {
                    'page@': {
                        templateUrl: 'account/account.list.html',
                        controller: 'List',
                    },
                }
            })
            .state('backend.view', {
                meta: {
                    title: '',
                    description: ''
                },
                url: '/:id',
                views: {
                    'page@': {
                        templateUrl: 'account/account.edit.html',
                        resolve: {
                            editResolve: ['$stateParams', 'account', function($stateParams, account) {
                                var ItemId = $stateParams.id;
                                return account.show({id: ItemId}).$promise;
                            }],
                        },
                        controller: 'Edit',
                    }
                }
            });
    }

    angular
        .module('app.account')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
