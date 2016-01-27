(function() {
    'use strict';

    function HeaderMember ($scope, $mdSidenav, accountResolve) {

        $scope.display = false;
        $scope.member = accountResolve;
        $scope.openMemberdNavigation = function () {
            $scope.display = true;
            $mdSidenav('memberNavigationPanel').open();
        };

        $scope.closeMemberdNavigation = function () {
            $scope.display = false;
            $mdSidenav('memberNavigationPanel').close()
        };

    }

    angular
        .module('app')
        .controller('HeaderMember', HeaderMember);

    HeaderMember.$inject = ['$scope', '$mdSidenav', 'accountResolve'];

})();
