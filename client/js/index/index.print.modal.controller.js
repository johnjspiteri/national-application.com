(function() {
    'use strict';

    function IndexPrintModal ($document, $scope, $state) {

        $scope.display = true;
        // $scope.data.phone = '4165324886'

        $scope.close = function () {
            $scope.display = false;
            $state.go('frontend.index');
        };


    }

    angular
        .module('app.index')
        .controller('IndexPrintModal', IndexPrintModal);

    IndexPrintModal.$inject = ['$document', '$scope', '$state'];

})();