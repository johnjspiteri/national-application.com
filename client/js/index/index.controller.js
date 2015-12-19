(function() {
    'use strict';

    function Index ($document, $scope, $state) {

        $scope.display = false;

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

    Index.$inject = ['$document', '$scope', '$state'];

})();