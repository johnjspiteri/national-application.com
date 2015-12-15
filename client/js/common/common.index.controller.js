(function() {
    'use strict';

    function CommonIndexController ($scope, CommonModal) {

        $scope.state = true;

        $scope.toggle = function() {
            $scope.state = !$scope.state;
        };

        $scope.saveModal = function() {
            CommonModal.saveModal();
        };

        $scope.textModal = function() {
            CommonModal.textModal();
        };

        $scope.emailModal = function() {
            CommonModal.emailModal();
        };
        // $scope.emailModal();
        $scope.printModal = function() {
            CommonModal.printModal();
        };

    }

    angular
        .module('app.common')
        .controller('CommonIndexController', CommonIndexController);

    CommonIndexController.$inject = ['$scope', 'CommonModal'];

})();
