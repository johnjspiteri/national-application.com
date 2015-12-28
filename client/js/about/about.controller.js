(function() {
    'use strict';

    function About ($scope, uiGmapGoogleMapApi) {

        $scope.contact = true;

        $scope.toggle = function() {
            $scope.contact = !$scope.contact;
        };
        $scope.map = {
            center: {
                latitude: 43.648125,
                longitude: -79.394845
            },
            zoom: 14
        };
        $scope.options = {
            disableDefaultUI: false,
            draggable: false,
            mapTypeControl: false,
            maxZoom: 14,
            minZoom: 14,
            scrollwheel: false,
            streetViewControl: false,
            zoomControl: false,
        };
        $scope.marker = {
            id: 1,
            coords: {
                latitude: 43.648125,
                longitude: -79.394845,
            },
            options: {
                draggable: false,
                icon: '/img/car-icon.png',
            }
        };

        uiGmapGoogleMapApi.then(function(maps) {});

    }

    angular
        .module('app.about')
        .controller('About', About);

    About.$inject = ['$scope', 'uiGmapGoogleMapApi'];

})();