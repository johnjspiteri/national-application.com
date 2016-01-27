(function() {
    'use strict';

    function CommonController ($auth,$scope, $state, $mdSidenav,uiGmapGoogleMapApi) {

        $scope.display = false;

        $scope.open = function () {
            $scope.display = true;
            $mdSidenav('navigationPanel').open();
        };

        $scope.close = function () {
            $scope.display = false;
            $mdSidenav('navigationPanel').close()
        };

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

        $scope.map = {
            center:
                { latitude: 43.648125, longitude: -79.394845 },
            zoom: 15
         };

        $scope.options = {
            scrollwheel: false,
            mapTypeControl: false,
            streetViewControl: true,
            minZoom: 17,
            maxZoom: 17,
            disableDefaultUI: false,
            zoomControl: false,
            draggable: false
         };
        $scope.marker = {
            id: 1,
            coords: {
                latitude: 43.648125,
                longitude: -79.394845,
            },
            options: {
                draggable: false,
            }
        };

        uiGmapGoogleMapApi.then(function(maps) {

        });
    }

    angular
        .module('app')
        .controller('CommonController', CommonController);

    CommonController.$inject = ['$auth','$scope', '$state', '$mdSidenav','uiGmapGoogleMapApi'];

})();
