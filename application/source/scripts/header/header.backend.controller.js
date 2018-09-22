(function() {
    'use strict';

    function HeaderBackend ($auth, $scope, $state, $mdSidenav) {

        $scope.display = false;

        $scope.openBackendNavigation = function () {
            $scope.display = true;
            $mdSidenav('backendNavigationPanel').open();
        };

        $scope.closeBackendNavigation = function () {
            $scope.display = false;
            $mdSidenav('backendNavigationPanel').close()
        };

        $scope.logout = function() {
            if (!$auth.isAuthenticated()) { return; }
            $auth.logout()
                .then(function() {
                    // toastr.info('You have been logged out');
                    $state.go('login');
                });
        };
    }

    angular
        .module('app')
        .controller('HeaderBackend', HeaderBackend);

    HeaderBackend.$inject = ['$auth','$scope', '$state', '$mdSidenav'];

})();
