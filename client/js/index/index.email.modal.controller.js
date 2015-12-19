(function() {
    'use strict';

    function IndexEmailModal ($document, $scope, $state) {

        $scope.display = true;

        $scope.close = function () {
            $scope.display = false;
            $state.go('frontend.index');
        };

    }

    angular
        .module('app')
        .controller('IndexEmailModal', IndexEmailModal);

    IndexEmailModal.$inject = ['$document', '$scope', '$state'];

})();