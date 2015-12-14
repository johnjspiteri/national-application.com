(function() {
    'use strict';

    function config ($urlRouterProvider, uiGmapGoogleMapApiProvider) {

        uiGmapGoogleMapApiProvider.configure({
             //    key: 'your api key',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });

        $urlRouterProvider.otherwise('/404');
        $urlRouterProvider.rule(function ($injector, $location) {
            var path = $location.url();
            if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
                return;
            }
            if (path.indexOf('?') > -1) {
                return path.replace('?', '/?');
            }
            return path + '/';
        });
    }

    angular
        .module('app')
        .config(config);

    config.$inject = ['$urlRouterProvider', 'uiGmapGoogleMapApiProvider'];

})();
