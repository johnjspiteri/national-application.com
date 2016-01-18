(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('frontend.question', {
                url: '/questions',
                views: {
                    'page@': {
                        templateUrl: 'question/question.html',
                        controller: 'Question',
                    }
                }
            });
    }

    angular
        .module('app.question')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
