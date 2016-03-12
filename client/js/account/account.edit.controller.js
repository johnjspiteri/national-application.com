(function() {
	'use strict';

	function Edit ($document, $scope, $state, account, itemResolve) {

		$scope.item = itemResolve;

		$scope.url = "http://nationalrxcard.com/nrx/" + $scope.item.clean;

		$scope.createClean = function() {
			$scope.item.clean = ($scope.item.organization).replace(/[\s:,!?]/g, '-').replace(/--/g, '-').replace(/-$/, '').toLowerCase();

			if($scope.item.organization) {
				$scope.url = "http://nationalrxcard.com/nrx/" + $scope.item.clean;
			}
		};

		$scope.saveImage = function(content) {
			account.update({id:$scope.item._id}, {$set: {
				'image': content,
			}}).$promise.then(function(data){
				$scope.item.image = data.image;
			});
			$scope.new = null;
		};
		$scope.updateImageState = function () {
			$scope.item.imageState = !$scope.item.imageState;
			account.update({id:$scope.item._id}, {
				'imageState': $scope.item.imageState
			});
		};

		$scope.updateOrganization = function () {
			$scope.createClean();
			account.update({id:$scope.item._id}, {
				'clean': $scope.item.clean,
				'organization': $scope.item.organization
			});
			$state.go($state.current, {id: $scope.item.clean}, {notify: false});

		};
		$scope.updateEmail = function () {
			account.update({id:$scope.item._id}, {
				'email': $scope.item.email
			});
		};
		$scope.updateURL = function () {
			account.update({id:$scope.item._id}, {
				'file_url': $scope.item.file_url
			});
		};
		$scope.updateBIN = function () {
			account.update({id:$scope.item._id}, {
				'plan.bin': $scope.item.plan.bin
			});
		};
		$scope.updatePCN = function () {
			account.update({id:$scope.item._id}, {
				'plan.pcn': $scope.item.plan.pcn
			});
		};
		$scope.updateGroup = function () {
			account.update({id:$scope.item._id}, {
				'plan.group': $scope.item.plan.group
			});
		};
		$scope.updatePatientID = function () {
			account.update({id:$scope.item._id}, {
				'plan.patient_id': $scope.item.plan.patient_id
			});
		};

		$scope.deleteItem = function (data) {
			account.destroy({id:data});
			$state.go('backend.list', {}, {reload: true});
		};
	}

	angular
		.module('app.account')
		.controller('Edit', Edit);

	Edit.$inject = ['$document', '$scope', '$state', 'account', 'itemResolve'];

})();