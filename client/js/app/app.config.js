(function() {
	'use strict';

	function config ($compileProvider, $urlRouterProvider, AngularyticsProvider, uiGmapGoogleMapApiProvider) {

		uiGmapGoogleMapApiProvider.configure({
			 //    key: 'your api key',
			v: '3.17',
			libraries: 'weather,geometry,visualization'
		});

		AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);

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

	config.$inject = ['$compileProvider','$urlRouterProvider', 'AngularyticsProvider', 'uiGmapGoogleMapApiProvider'];

})();