(function() {
    'use strict';

    function Edit ($document, $scope, $state, account, itemResolve) {

        $scope.item = itemResolve;
        console.log($scope.item);

        $scope.url = "http://nationalrxcard.com/nrx/" + $scope.item.clean;

        $scope.saveImage = function(content) {
            account.update({id:$scope.item._id}, {$set: {
                'image': content,
            }}).$promise.then(function(data){
                $scope.item.image = data.image;
            });
            $scope.new = null;
        };
        $scope.updateOrganization = function () {
            account.update({id:$scope.item._id}, {
                'organization': $scope.item.organization
            });
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
    }

    angular
        .module('app.account')
        .controller('Edit', Edit);

    Edit.$inject = ['$document', '$scope', '$state', 'account', 'itemResolve'];

})();