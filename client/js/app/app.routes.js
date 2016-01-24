(function() {
    'use strict';

    function routes($authProvider, $locationProvider, $stateProvider) {
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
                        controller: 'CommonController',
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
                        templateUrl: 'header/header-admin.html',
                        // controller: 'CommonController',
                    },
                }
            });
    }

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$authProvider', '$locationProvider', '$stateProvider'];

})();
