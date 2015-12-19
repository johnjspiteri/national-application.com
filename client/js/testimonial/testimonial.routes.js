(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('testimonial', {
                abstract: true,
                url: '',
                views: {
                    'container@frontend': {
                        templateUrl: 'testimonial/testimonial.html',
                    },
                }
            })
            .state('testimonial.list', {
                data : { title: ''},
                url: '/testimonials',
                views: {
                    'container': {
                        templateUrl: 'testimonial/testimonial.list.html',
                        controller: 'Testimonial'

                    },
                },
            })
    }

    angular
        .module('app.testimonial')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
