(function() {
    'use strict';

    function About($scope, $document, contact, uiGmapGoogleMapApi) {
        $scope.contacted = false;

        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
        };

        $scope.sendContact = function() {
            contact.create({
                id: '',
                name: $scope.data.name,
                email: $scope.data.email,
                phone: $scope.data.phone,
                message: $scope.data.message
            });
            $scope.data = {};
            $scope.contacted = true;
            $scope.toTheTop();
        };

        $scope.map = {
            center: {
                latitude: 40.751798,
                longitude: -111.572597
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
            zoomControl: false
        };
        $scope.marker = {
            id: 1,
            coords: {
                latitude: 40.751798,
                longitude: -111.572597
            },
            options: {
                draggable: false
            }
        };

        uiGmapGoogleMapApi.then(function(maps) {});
    }

    angular.module('app.about').controller('About', About);

    About.$inject = ['$scope', '$document', 'contact', 'uiGmapGoogleMapApi'];
})();
