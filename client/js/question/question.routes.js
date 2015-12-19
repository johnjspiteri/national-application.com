(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('question', {
                abstract: true,
                url: '',
                resolve: {
                    indexResolve: ['index', function(index) {
                        return index.query().$promise;
                    }],
                },
                views: {
                    'container@frontend': {
                        templateUrl: 'question/question.html',
                    },
                }
            })
            .state('question.list', {
                data : { title: ''},
                url: '/questions',
                views: {
                    'container': {
                        templateUrl: 'question/question.list.html',
                        controller: 'Question'

                    },
                },
            })
    }

    angular
        .module('app.question')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
