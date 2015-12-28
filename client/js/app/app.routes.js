(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('frontend', {
                url: '',
                abstract: true,
                resolve: {
                    statesResolve: ['$http', function($http) {
                        return $http({
                            method: 'GET', url: '/js/app/states.json'
                        });
                    }],
                },
                views: {
                    'header': {
                        templateUrl: 'header/header.html',
                        controller: 'CommonController',
                    },
                    'page': {
                        templateUrl: 'page/page.html',
                    },
                    //  'footer': {
                    //     templateUrl: 'footer/footer.a1.html',
                        // controller: 'Footer',
                    // },
                    //  'corner': {
                    //     templateUrl: 'corner/corner.a1.html',
                        // controller: 'Corner',
                    // },
                }
            })
            .state('frontend.index', {
                meta: {
                    title: 'Test This To The Auto Dealership | Interface Agency',
                    description: 'This is the description shown in Google search results'
                },
                url: '/',
                views: {
                    'container@frontend': {
                        templateUrl: 'index/index.html',
                        controller: 'Index'
                    },
                }
            })
            .state('frontend.index.text', {
                url: 'text-a-free-rx-card',
                views: {
                    'container@frontend': {
                        templateUrl: 'index/index.html',
                        controller: 'Index'
                    },
                    'modal@frontend': {
                        templateUrl: 'index/index.text.modal.html',
                        controller: 'IndexTextModal'
                    },
                },
            })
            .state('frontend.index.email', {
                url: 'email-a-free-rx-card',
                views: {
                    'container@frontend': {
                        templateUrl: 'index/index.html',
                        controller: 'Index'
                    },
                    'modal@frontend': {
                        templateUrl: 'index/index.email.modal.html',
                        controller: 'IndexEmailModal'
                    },
                },
            })
            .state('frontend.index.save', {
                url: 'save-a-free-rx-card',
                views: {
                    'container@frontend': {
                        templateUrl: 'index/index.html',
                        controller: 'Index'
                    },
                    'modal': {
                        templateUrl: 'index/index.save.modal.html',
                        controller: 'IndexSaveModal'
                    },
                },
            })
            .state('frontend.index.print', {
                url: 'print-a-free-rx-card',
                views: {
                    'container': {
                        templateUrl: 'index/index.html',
                        controller: 'Index'
                    },
                    'modal@frontend': {
                        templateUrl: 'index/index.print.modal.html',
                        controller: 'IndexPrintModal'
                    },
                },
            })
            .state('frontend.question', {
                url: '/questions',
                views: {
                    'container': {
                        templateUrl: 'question/question.html',
                        controller: 'Question',
                    }
                }
            })
            .state('frontend.testimonial', {
                url: '/testimonial',
                views: {
                    'container': {
                        templateUrl: 'testimonial/testimonial.html',
                        controller: 'Testimonial',
                    },
                },
            })
            .state('frontend.about', {
                url: '/about-us',
                views: {
                    'container@frontend': {
                        templateUrl: 'about/about.html',
                        controller: 'About',
                    },
                }
            });
    }

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
