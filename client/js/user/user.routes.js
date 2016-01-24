(function() {
    'use strict';

    function routes($locationProvider, $stateProvider, $authProvider) {
        $locationProvider.html5Mode(true);

        function skipIfLoggedIn($q, $auth, $state) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.reject();
                $state.go('backend.list');
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        }

        $stateProvider
            .state('login', {
                data : { title: ''},
                url: '/login',
                views: {
                    'page': {
                        templateUrl: 'user/user.login.html',
                        controller: 'Login',
                        resolve: {
                            skipIfLoggedIn: skipIfLoggedIn
                        },
                    },
                }
            })
            .state('register', {
                meta: {
                    title: '',
                    description: ''
                },
                url: '/register',
                views: {
                    'page': {
                        templateUrl: 'user/user.register.html',
                        controller: 'Register',
                        resolve: {
                            skipIfLoggedIn: skipIfLoggedIn
                        },
                    }
                }
            });
    }

    angular
        .module('app.user')
        .config(routes);

        routes.$inject = ['$locationProvider', '$stateProvider', '$authProvider'];

})();
