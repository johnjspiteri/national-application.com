(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('member.view', {
                meta: {
                    title: '',
                    description: ''
                },
                url: '',
                views: {
                    'page@': {
                        templateUrl: 'member/member.view.html',
                        resolve: {
                            accountResolve: ['$stateParams', 'account', function($stateParams, account) {
                                var ItemId = $stateParams.id;
                                return account.show({id: ItemId}).$promise;
                            }],
                        },
                        controller: 'View',
                    }
                }
            })
            .state('member.view.text', {
                url: '/text-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'member/member.text.modal.html',
                        resolve: {
                            accountResolve: ['$stateParams', 'account', function($stateParams, account) {
                                var ItemId = $stateParams.id;
                                return account.show({id: ItemId}).$promise;
                            }],
                        },
                        controller: 'MemberTextModal'
                    },
                },
            })
            .state('member.view.email', {
                url: '/email-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'member/member.email.modal.html',
                        resolve: {
                            accountResolve: ['$stateParams', 'account', function($stateParams, account) {
                                var ItemId = $stateParams.id;
                                return account.show({id: ItemId}).$promise;
                            }],
                        },
                        controller: 'MemberEmailModal'
                    },
                },
            })
            .state('member.view.save', {
                url: '/save-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'member/member.save.modal.html',
                        resolve: {
                            accountResolve: ['$stateParams', 'account', function($stateParams, account) {
                                var ItemId = $stateParams.id;
                                return account.show({id: ItemId}).$promise;
                            }],
                        },
                        controller: 'MemberSaveModal'
                    },
                },
            })
            .state('member.view.print', {
                url: '/print-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'member/member.print.modal.html',
                        resolve: {
                            accountResolve: ['$stateParams', 'account', function($stateParams, account) {
                                var ItemId = $stateParams.id;
                                return account.show({id: ItemId}).$promise;
                            }],
                        },
                        controller: 'MemberPrintModal'
                    },
                },
            })
            .state('member.question', {
                url: '/questions',
                views: {
                    'page@': {
                        templateUrl: 'question/question.html',
                        controller: 'Question',
                    }
                }
            })
            .state('member.testimonial', {
                url: '/testimonial',
                views: {
                    'page@': {
                        templateUrl: 'testimonial/testimonial.html',
                    },
                },
            })
            .state('member.about', {
                url: '/about-us',
                views: {
                    'page@': {
                        templateUrl: 'about/about.html',
                        controller: 'About',
                    },
                }
            });
    }

    angular
        .module('app.member')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
