(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('frontend.member', {
                url: '/nrx/:id',
                abstract: true,
                views: {
                    'header@': {
                        templateUrl: 'header/header-member.html',
                        controller: 'CommonController',
                    },
                     'footer@': {
                        templateUrl: 'footer/footer-member.html',
                    },
                }
            })
            .state('frontend.member.view', {
                meta: {
                    title: '',
                    description: ''
                },
                url: '',
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
            .state('frontend.member.view.text', {
                url: '/text-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'modal/modal.text.modal.html',
                        resolve: {
                            memberResolve: ['$stateParams', 'member', function($stateParams, member) {
                                var ItemId = $stateParams.id;
                                return member.show({id: ItemId}).$promise;
                            }],
                        },
                        controller: 'MemberTextModal'
                    },
                },
            })
            .state('frontend.member.view.email', {
                url: '/email-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'modal/modal.email.modal.html',
                        resolve: {
                            memberResolve: ['$stateParams', 'member', function($stateParams, member) {
                                var ItemId = $stateParams.id;
                                return member.show({id: ItemId}).$promise;
                            }],
                        },
                        controller: 'MemberEmailModal'
                    },
                },
            })
            .state('frontend.member.view.save', {
                url: '/save-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'modal/modal.save.modal.html',
                        resolve: {
                            memberResolve: ['$stateParams', 'member', function($stateParams, member) {
                                var ItemId = $stateParams.id;
                                return member.show({id: ItemId}).$promise;
                            }],
                        },
                        controller: 'MemberSaveModal'
                    },
                },
            })
            .state('frontend.member.view.print', {
                url: '/print-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'modal/modal.print.modal.html',
                        resolve: {
                            memberResolve: ['$stateParams', 'member', function($stateParams, member) {
                                var ItemId = $stateParams.id;
                                return member.show({id: ItemId}).$promise;
                            }],
                        },
                        controller: 'MemberPrintModal'
                    },
                },
            })
            .state('frontend.member.question', {
                url: '/questions',
                views: {
                    'page@': {
                        templateUrl: 'question/question.html',
                        controller: 'Question',
                    }
                }
            })
            .state('frontend.member.testimonial', {
                url: '/testimonial',
                views: {
                    'page@': {
                        templateUrl: 'testimonial/testimonial.html',
                    },
                },
            })
            .state('frontend.member.about', {
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
