(function() {
	'use strict';

	function Print ($document, $scope, $window, $state, stateFactory) {

		$scope.display = true;
		$scope.account = stateFactory.getState();

		$scope.close = function () {
			$scope.display = false;
			$state.go('frontend.index');
		};

		$scope.print = function() {
			$window.print();
		};
	}

	angular
		.module('app.index')
		.controller('Print', Print);

	Print.$inject = ['$document', '$scope', '$window', '$state', 'stateFactory'];

})();