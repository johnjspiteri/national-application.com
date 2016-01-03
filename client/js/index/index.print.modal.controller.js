(function() {
    'use strict';

    function IndexPrintModal ($document, $scope, $window, $state) {

        $scope.display = true;
        $scope.close = function () {
            $scope.display = false;
            $state.go('frontend.index');
        };

        $scope.print = function() {
            $window.print();
        };
        $scope.print();

    }

    angular
        .module('app.index')
        .controller('IndexPrintModal', IndexPrintModal);

    IndexPrintModal.$inject = ['$document', '$scope', '$window', '$state'];

})();