(function() {
    'use strict';

    function IndexTextModal ($document, $scope, $state, text) {

        $scope.display = true;

        $scope.close = function () {
            $scope.display = false;
            $state.go('frontend.index');
        };

        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
        };

        $scope.textForm = function () {
            text.create({
                destination: $scope.user.destination,
            });
            $scope.user = {};
            $scope.display = false;
            $scope.toTheTop();
            $scope.close();
        };

    }

    angular
        .module('app.index')
        .controller('IndexTextModal', IndexTextModal);

    IndexTextModal.$inject = ['$document', '$scope', '$state','text'];

})();