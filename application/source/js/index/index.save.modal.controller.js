(function() {
	'use strict';

	function Save ($scope, $state, $window, stateFactory) {

		$scope.display = true;
		$scope.account = stateFactory.getState();

		$scope.close = function() {
			$scope.display = false;
			$state.go('frontend.index');
		};
	}

	angular
		.module('app.index')
		.controller('Save', Save);

	Save.$inject = ['$scope', '$state', '$window', 'stateFactory'];

})();