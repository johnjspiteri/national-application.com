(function() {
    'use strict';

    function routes($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        // $stateProvider
        //     .state('index', {
        //         url: '',
        //         abstract: true,
        //         // views: {
        //         //     'index': {
        //         //         templateUrl: 'front/index.html',
        //         //         controller: 'CommonController'
        //         //     },
        //         // }
        //     })

    }

    angular
        .module('app.contact')
        .config(routes);

    routes.$inject = ['$locationProvider', '$stateProvider'];

})();
