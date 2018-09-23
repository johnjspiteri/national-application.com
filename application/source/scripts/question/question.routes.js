(function() {
    'use strict';

    function routes($locationProvider, $stateProvider, ngMetaProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider.state('frontend.question', {
            meta: {
                title: 'Frequently Asked Questions | National RX Card',
                description:
                    'Find the answers to frequently asked questions regarding the National RX Card.'
            },
            url: 'questions',
            views: {
                'page@': {
                    templateUrl: '/public/html/question/question.html',
                    controller: 'Question'
                }
            }
        });
    }

    angular.module('app.question').config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider', 'ngMetaProvider'];
})();
