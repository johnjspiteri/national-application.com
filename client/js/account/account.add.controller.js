(function() {
    'use strict';

    function Add ($document, $scope, $state, account) {

        $scope.readOnly = true;

        $scope.createClean = function() {
            $scope.item.clean = ($scope.item.organization).replace(/[\s:,!?]/g, '-').replace(/--/g, '-').replace(/-$/, '').toLowerCase();

            if($scope.item.organization) {
                $scope.url = "http://nationalrxcard.com/nrx/" + $scope.item.clean;
            }
        };

        $scope.addItem = function() {
            $scope.createClean();

            account.create({
                clean: $scope.item.clean,
                image: $scope.item.image,
                plan: {
                    bin: $scope.item.plan.bin,
                    pcn: $scope.item.plan.pcn,
                    group: $scope.item.plan.group,
                    patient_id: $scope.item.plan.patient_id,
                },
                organization: $scope.item.organization,
                email: $scope.item.email,
                file_url: $scope.item.file_url


            });
            // initialize
            $scope.item = {};
            $scope.item.image = {};
            $scope.url = {};
            $state.go('account.list');
        };
    }

    angular
        .module('app.account')
        .controller('Add', Add);

    Add.$inject = ['$document', '$scope', '$state', 'account'];

})();