(function() {
	'use strict';

	function Text ($document, $scope, $state, stateFactory, text) {

		$scope.display = true;
		$scope.account = stateFactory.getState();

		$scope.close = function () {
			$scope.display = false;
			$state.go('frontend.index');
		};

		$scope.toTheTop = function() {
			$document.scrollTopAnimated(0);
		};

		$scope.text = function () {
			text.create({
				number: $scope.data.number,
				file: $scope.member.file_url,
			});
			$scope.data = {};
			$scope.toTheTop();
			$state.go('frontend.index.text.confirmation');
		};
	}

	angular
		.module('app.index')
		.controller('Text', Text);

	Text.$inject = ['$document', '$scope', '$state', 'stateFactory', 'text'];

})();