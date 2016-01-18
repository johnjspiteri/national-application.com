(function() {
    'use strict';

    function IndexTextModal ($document, $scope, $state, indexResolve, text) {

        $scope.display = true;
        $scope.member = indexResolve;

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
                file: $scope.member.file_url,
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

    IndexTextModal.$inject = ['$document', '$scope', '$state', 'indexResolve', 'text'];

})();