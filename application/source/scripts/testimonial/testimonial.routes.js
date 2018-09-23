(function() {
    'use strict';

    function routes($locationProvider, $stateProvider, ngMetaProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider.state('frontend.testimonial', {
            meta: {
                title: 'Testimonials | National RX Card',
                description: 'User stories and testimonials using the National RX Card.'
            },
            url: 'testimonials',
            views: {
                'page@': {
                    templateUrl: '/public/html/testimonial/testimonial.html'
                }
            }
        });
    }

    angular.module('app.testimonial').config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider', 'ngMetaProvider'];
})();
