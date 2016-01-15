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
            })
            .state('frontend.view.text', {
                url: '/text-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'modal/modal.text.modal.html',
                        controller: 'MemberTextModal'
                    },
                },
            })
            .state('frontend.view.email', {
                url: '/email-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'modal/modal.email.modal.html',
                        controller: 'MemberEmailModal'
                    },
                },
            })
            .state('frontend.view.save', {
                url: '/save-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'modal/modal.save.modal.html',
                        controller: 'MemberSaveModal'
                    },
                },
            })
            .state('frontend.view.print', {
                url: '/print-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'modal/modal.print.modal.html',
                        controller: 'MemberPrintModal'
                    },
                },
            });            
    }

    angular
        .module('app.member')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
