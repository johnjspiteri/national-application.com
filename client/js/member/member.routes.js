(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('frontend.member', {
                url: '/member',
                views: {
                    'page@': {
                        templateUrl: 'member/member.html',
                        controller: 'Member',
                    }
                }
            })
            .state('frontend.view', {
                meta: {
                    title: '',
                    description: ''
                },
                url: '/:id',
                views: {
                    'page@': {
                        templateUrl: 'member/member.view.html',
                        resolve: {
                            memberResolve: ['$stateParams', 'member', function($stateParams, member) {
                                var ItemId = $stateParams.id;
                                return member.show({id: ItemId}).$promise;
                            }],
                        },
                        controller: 'View',
                    }
                }
            });
    }

    angular
        .module('app.member')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
