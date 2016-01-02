(function() {
    'use strict';

    function IndexTextModal ($document, $scope, $state, text) {

        $scope.display = true;
        $scope.cardUrl='https://s3.amazonaws.com/nationalrx/card/national_test.png';

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
                file: $scope.cardUrl
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

    IndexTextModal.$inject = ['$document', '$scope', '$state', 'text'];

})();