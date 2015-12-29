(function() {
    'use strict';

    function IndexTextModal ($document, $scope, $state, clientResolve, text) {

        $scope.display = true;
        $scope.card = clientResolve;

        console.log($scope.card);

        $scope.close = function () {
            $scope.display = false;
            $state.go('frontend.index');
        };

        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
        };

        $scope.text = function () {
            text.create({
                destination: $scope.data.destination,
                file: $scope.card.file
            });
            $scope.data = {};
            $scope.display = false;
            $scope.toTheTop();
            $scope.close();
        };

    }

    angular
        .module('app.index')
        .controller('IndexTextModal', IndexTextModal);

    IndexTextModal.$inject = ['$document', '$scope', '$state', 'clientResolve', 'text'];

})();