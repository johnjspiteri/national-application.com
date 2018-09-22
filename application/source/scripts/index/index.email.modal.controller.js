(function() {
	'use strict';

	function Email ($document, $scope, $state, mail, stateFactory) {

		$scope.display = true;
		$scope.account = stateFactory.getState();

		$scope.close = function () {
			$scope.display = false;
			$state.go('frontend.index');
		};

		$scope.toTheTop = function() {
			$document.scrollTopAnimated(0);
		};

		$scope.email = function () {
			mail.create({
				email: $scope.data.email,
				file: $scope.account.file_url,
			}).$promise.then(function() {
				$scope.data = {};
				$scope.toTheTop();
				$state.go('frontend.index.email.confirmation');
			});
		};
	}

	angular
		.module('app.index')
		.controller('Email', Email);

	Email.$inject = ['$document', '$scope', '$state', 'mail', 'stateFactory'];

})();