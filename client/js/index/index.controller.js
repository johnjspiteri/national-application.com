(function() {
    'use strict';

    function Index ($document, $scope, $state, statesResolve) {

        $scope.display = false;

        $scope.data = statesResolve.data;
        $scope.states = [];

        $scope.statesList = function() {
            $scope.states = [];
            angular.forEach($scope.data, function(object) {
                $scope.states.push(object.state);
            });
        };
        $scope.statesList();

        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
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


    }

    angular
        .module('app')
        .controller('Index', Index);

    Index.$inject = ['$document', '$scope', '$state', 'statesResolve'];

})();