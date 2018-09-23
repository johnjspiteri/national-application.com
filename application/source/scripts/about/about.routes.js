(function() {
    'use strict';

    function routes($locationProvider, $stateProvider, ngMetaProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider.state('frontend.about', {
            meta: {
                title: 'About National RX Card, LLC | National RX Card',
                description: 'Contact us regarding any coments, issues and user feedback.'
            },
            url: '/about-us',
            views: {
                'page@': {
                    templateUrl: '/public/html/about/about.html',
                    controller: 'About'
                }
            }
        });
    }

    angular.module('app.about').config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider', 'ngMetaProvider'];
})();
