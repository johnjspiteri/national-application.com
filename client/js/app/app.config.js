(function() {
	'use strict';

	function config ($compileProvider, $urlRouterProvider, AnalyticsProvider, uiGmapGoogleMapApiProvider) {

		uiGmapGoogleMapApiProvider.configure({
			 //    key: 'your api key',
			v: '3.17',
			libraries: 'weather,geometry,visualization'
		});

		AnalyticsProvider.setAccount('UA-74035692-1');
		AnalyticsProvider.trackPages(true);

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

	config.$inject = ['$compileProvider','$urlRouterProvider', 'AnalyticsProvider', 'uiGmapGoogleMapApiProvider'];

})();