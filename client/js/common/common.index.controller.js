(function() {
    'use strict';

    function CommonIndexController ($rootScope, $scope, mail, CommonModal) {

        $scope.state = true;

        $scope.toggle = function() {
            $scope.state = !$scope.state;
        };

        $scope.saveModal = function() {
            $rootScope.display = true;
            CommonModal.saveModal();
        };

        $scope.textModal = function() {
            $rootScope.display = true;
            CommonModal.textModal();
        };

        $scope.emailModal = function() {
            $rootScope.display = true;
            CommonModal.emailModal();
        };
        //$scope.emailModal();
        $scope.printModal = function() {
            $rootScope.display = true;
            CommonModal.printModal();
        };
        // $scope.textModal();

    }

    angular
        .module('app.common')
        .controller('CommonIndexController', CommonIndexController);

    CommonIndexController.$inject = ['$rootScope', '$scope', 'mail', 'CommonModal'];

})();
