(function() {
    'use strict';

    function IndexSaveModal ($document, $scope, $state) {

        $scope.display = true;
        // $scope.data.phone = '4165324886'

        $scope.close = function () {
            $scope.display = false;
            $state.go('frontend.index');
        };


    }

    angular
        .module('app')
        .controller('IndexSaveModal', IndexSaveModal);

    IndexSaveModal.$inject = ['$document', '$scope', '$state'];

})();