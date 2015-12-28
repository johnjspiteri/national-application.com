(function() {
    'use strict';

    function config ($compileProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {

        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|blob):/);

        uiGmapGoogleMapApiProvider.configure({
             //    key: 'your api key',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });

        $urlRouterProvider.otherwise('/404');
        $urlRouterProvider.rule(function ($injector, $location) {
            var path = $location.url();

            if ('/' === path[path.length - 1]) {
                return path.replace(/\/$/, '');
            }
            if (path.indexOf('/?') > 0) {
                return path.replace('/?', '?');
            }
            return false;
        });

    }

    angular
        .module('app')
        .config(config);

    config.$inject = ['$compileProvider', '$urlRouterProvider', 'uiGmapGoogleMapApiProvider'];

})();
