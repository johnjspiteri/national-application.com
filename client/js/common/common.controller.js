(function() {
    'use strict';

    function CommonController ($scope, uiGmapGoogleMapApi) {
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
        .module('app.common')
        .controller('CommonController', CommonController);

    CommonController.$inject = ['$scope', 'uiGmapGoogleMapApi'];

})();