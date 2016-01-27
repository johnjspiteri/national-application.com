(function() {
    'use strict';

    function Header ($scope, $mdSidenav) {

        $scope.display = false;

        $scope.open = function () {
            $scope.display = true;
            $mdSidenav('navigationPanel').open();
        };

        $scope.close = function () {
            $scope.display = false;
            $mdSidenav('navigationPanel').close()
        };
    }

    angular
        .module('app')
        .controller('Header', Header);

    Header.$inject = ['$scope', '$mdSidenav'];

})();
