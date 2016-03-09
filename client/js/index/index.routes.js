(function() {
	'use strict';

	function routes($locationProvider, $stateProvider, ngMetaProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider
			.state('frontend.index', {
				meta: {
					title: 'Welcome To The National RX Card | National RX Card',
					description: 'This is the description shown in Google search results'
				},
				url: '/',
				views: {
					'page@': {
						templateUrl: 'index/index.html',
						controller: 'Index'
					},
				}
			})
			.state('frontend.index.text', {
				meta: {
					title: 'Text The National RX Card | National RX Card',
					description: 'Text the National RX Card, and use this card at over 63,000 pharmacies nationwide.'
				},
				url: 'text-a-free-rx-card',
				views: {
					'modal@': {
						templateUrl: 'index/modal/text.modal.html',
						controller: 'Text'
					},
				},
			})
			.state('frontend.index.text.confirmation', {
				meta: {
					title: 'The National RX Card Has Been Texted | National RX Card',
					description: 'The National RX Card has been successfully texted, use this card at over 63,000 pharmacies nationwide.'
				},
				url: '/sent',
				views: {
					'modal@': {
						templateUrl: 'index/modal/text.modal.confirmation.html',
						controller: 'Text'
					},
				},
			})
			.state('frontend.index.email', {
				meta: {
					title: 'Email The National RX Card | National RX Card',
					description: 'Email the National RX Card, and use this card at over 63,000 pharmacies nationwide.'
				},
				url: 'email-a-free-rx-card',
				views: {
					'modal@': {
						templateUrl: 'index/modal/email.modal.html',
						controller: 'Email'
					},
				},
			})
			.state('frontend.index.email.confirmation', {
				meta: {
					title: 'The National RX Card Has Been Emailed | National RX Card',
					description: 'The National RX Card has been successfully emailed, use this card at over 63,000 pharmacies nationwide.'
				},
				url: '/sent',
				views: {
					'modal@': {
						templateUrl: 'index/modal/email.modal.confirmation.html',
						controller: 'Email'
					},
				},
			})
			.state('frontend.index.save', {
				meta: {
					title: 'Save The National RX Card | National RX Card',
					description: 'Save the National RX Card, and use this card at over 63,000 pharmacies nationwide.'
				},
				url: 'save-a-free-rx-card',
				views: {
					'modal@': {
						templateUrl: 'index/modal/save.modal.html',
						controller: 'Save'
					},
				},
			})
			.state('frontend.index.print', {
				meta: {
					title: 'Print The National RX Card | National RX Card',
					description: 'Print the National RX Card, and use this card at over 63,000 pharmacies nationwide.'
				},
				url: 'print-a-free-rx-card',
				views: {
					'modal@': {
						templateUrl: 'index/modal/print.modal.html',
						controller: 'Print'
					},
				},
			});
	}

	angular
		.module('app.index')
		.config(routes);

	routes.$inject = ['$locationProvider', '$stateProvider', 'ngMetaProvider'];

})();
