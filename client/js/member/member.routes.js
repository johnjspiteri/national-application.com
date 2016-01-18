(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('member', {
                url: '/plan/:id',
                abstract: true,
                resolve: {
                    memberResolve: ['$stateParams', 'member', function($stateParams, member) {
                        var ItemId = $stateParams.id;
                        return member.show({id: ItemId}).$promise;
                    }],
                },                
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
            .state('member.view', {
                meta: {
                    title: '',
                    description: ''
                },
                url: '',
                views: {
                    'page@': {
                        templateUrl: 'member/member.view.html',
                        // resolve: {
                        //     memberResolve: ['$stateParams', 'member', function($stateParams, member) {
                        //         var ItemId = $stateParams.id;
                        //         return member.show({id: ItemId}).$promise;
                        //     }],
                        // },
                        controller: 'View',
                    }
                }
            })
            .state('member.view.text', {
                url: '/text-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'modal/modal.text.modal.html',
                        controller: 'MemberTextModal'
                    },
                },
            })
            .state('member.view.email', {
                url: '/email-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'modal/modal.email.modal.html',
                        controller: 'MemberEmailModal'
                    },
                },
            })
            .state('member.view.save', {
                url: '/save-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'modal/modal.save.modal.html',
                        controller: 'MemberSaveModal'
                    },
                },
            })
            .state('member.view.print', {
                url: '/print-a-free-rx-card',
                views: {
                    'modal@': {
                        templateUrl: 'modal/modal.print.modal.html',
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
