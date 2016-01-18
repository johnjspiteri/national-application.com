(function() {
    'use strict';

    function View ($document, $scope, $state, memberResolve) {

        $scope.member = memberResolve;
        console.log($scope.member);

        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
        };

        $scope.textModal = function() {
            $scope.toTheTop();
            $state.go('member.view.text');
        };
        $scope.emailModal = function() {
            $scope.toTheTop();
            $state.go('member.view.email');
        };
        $scope.saveModal = function() {
            $scope.toTheTop();
            $state.go('member.view.save');
        };
        $scope.printModal = function() {
            $scope.toTheTop();
            $state.go('member.view.print');
        };

    }

    angular
        .module('app.member')
        .controller('View', View);

    View.$inject = ['$document', '$scope', '$state', 'memberResolve'];

})();