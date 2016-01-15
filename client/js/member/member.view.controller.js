(function() {
    'use strict';

    function View ($document, $scope, $state, memberResolve) {

        $scope.member = memberResolve;

        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
        };

        $scope.textModal = function() {
            $scope.toTheTop();
            $state.go('frontend.view.text');
        };
        $scope.emailModal = function() {
            $scope.toTheTop();
            $state.go('frontend.view.email');
        };
        $scope.saveModal = function() {
            $scope.toTheTop();
            $state.go('frontend.view.save');
        };
        $scope.printModal = function() {
            $scope.toTheTop();
            $state.go('frontend.view.print');
        };

    }

    angular
        .module('app.member')
        .controller('View', View);

    View.$inject = ['$document', '$scope', '$state', 'memberResolve'];

})();