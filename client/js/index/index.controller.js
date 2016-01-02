(function() {
    'use strict';

    function Index ($sce, $document, $scope, $state, $stateParams, location, zip) {

        $scope.display = false;
        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
        };

        $scope.zip = function() {
            return zip.query({
                id: $scope.location.zip
            }).$promise.then(function(success) {
                $scope.results = success;
            });
        };

        $scope.stateUpdate = function(data) {
            return location.query({
                id: data
            }).$promise.then(function(success) {
                $scope.stateData = success;
                $scope.citiesList();
            });
        };

        $scope.cities = [];
        $scope.citiesList = function() {
            $scope.cities = [];
            var list = [];
            angular.forEach($scope.stateData, function(item) {
                if(item.state === $scope.location.state) {
                    list.push(item.city);
                }
            });
            $scope.cities = list.filter(function(elem, index, self) {
                return index === self.indexOf(elem);
            });
        };

        $scope.makeFilterUpdate = function() {
            $scope.modelFilter = null;
            $scope.modelsList();
        };

        $scope.textModal = function() {
            $scope.toTheTop();
            $state.go('frontend.index.text');
        };
        $scope.emailModal = function() {
            $scope.toTheTop();
            $state.go('frontend.index.email');
        };
        $scope.saveModal = function() {
            $scope.toTheTop();
            $state.go('frontend.index.save');
        };
        $scope.printModal = function() {
            $scope.toTheTop();
            $state.go('frontend.index.print');
        };

        $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Mexico", "New Hampshire", "New Jersey", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

    }

    angular
        .module('app.index')
        .controller('Index', Index);

    Index.$inject = ['$sce', '$document', '$scope', '$state', '$stateParams', 'location', 'zip'];

})();