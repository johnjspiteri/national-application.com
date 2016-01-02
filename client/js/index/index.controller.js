(function() {
    'use strict';

    function Index ($sce, $document, $scope, $state) {

        $scope.display = false;
        $scope.cardUrl='https://s3.amazonaws.com/nationalrx/card/national_test.png';

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
        .module('app.index')
        .controller('Index', Index);

    Index.$inject = ['$sce', '$document', '$scope', '$state'];

})();