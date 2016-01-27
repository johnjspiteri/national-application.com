(function() {
    'use strict';

    function routes($authProvider, $locationProvider, $stateProvider, ngMetaProvider) {
        $locationProvider.html5Mode(true);

        function loginRequired($q, $state, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.resolve();
            } else {
                $state.go('login');
            }
            return deferred.promise;
        }

        $stateProvider
            .state('frontend', {
                url: '',
                abstract: true,
                views: {
                    'header@': {
                        templateUrl: 'header/header.html',
                        controller: 'Header',
                    },
                    'footer@': {
                        templateUrl: 'footer/footer.html',
                    },
                }
            })
            .state('member', {
                url: '/nrx/:id',
                abstract: true,
                resolve: {
                    accountResolve: ['$stateParams', 'account', function($stateParams, account) {
                        var ItemId = $stateParams.id;
                        return account.show({id: ItemId}).$promise;
                    }],
                },
                views: {
                    'header@': {
                        templateUrl: 'header/header-member.html',
                        controller: 'HeaderMember',
                    },
                     'footer@': {
                        templateUrl: 'footer/footer.html',
                    },
                }
            })
            .state('backend', {
                url: '/admin',
                abstract: true,
                views: {
                    'header@': {
                        templateUrl: 'header/header-backend.html',
                        resolve: {
                            loginRequired: loginRequired,
                        },
                        controller: 'HeaderBackend',
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

    routes.$inject = ['$authProvider', '$locationProvider', '$stateProvider', 'ngMetaProvider'];

})();
