(function() {
    'use strict';

    function IndexPrintModal ($document, $scope, $window, $state, indexResolve) {

        $scope.display = true;
        $scope.member = indexResolve;

        $scope.close = function () {
            $scope.display = false;
            $state.go('frontend.index');
        };

        $scope.print = function() {
            $window.print();
        };
    }

    angular
        .module('app.index')
        .controller('IndexPrintModal', IndexPrintModal);

    IndexPrintModal.$inject = ['$document', '$scope', '$window', '$state', 'indexResolve'];

})();