(function() {
    'use strict';

    function IndexSaveModal ($sce, $document, $scope, $state) {

        $scope.display = true;

        $scope.close = function () {
            $scope.display = false;
            $state.go('frontend.index');
        };

    }

    angular
        .module('app')
        .controller('IndexSaveModal', IndexSaveModal);

    IndexSaveModal.$inject = ['$sce', '$document', '$scope', '$state'];

})();