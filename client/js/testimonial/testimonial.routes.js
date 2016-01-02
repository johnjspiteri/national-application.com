(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('frontend.testimonial', {
                url: '/testimonial',
                views: {
                    'page@': {
                        templateUrl: 'testimonial/testimonial.html',
                    },
                },
            });
    }

    angular
        .module('app.testimonial')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
