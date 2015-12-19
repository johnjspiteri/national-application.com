(function() {
    'use strict';

    function IndexTextModal ($document, $scope, $state, mail) {

        $scope.display = true;

        $scope.close = function () {
            $scope.display = false;
            $state.go('frontend.index');
        };

    }

    angular
        .module('app')
        .controller('IndexTextModal', IndexTextModal);

    IndexTextModal.$inject = ['$document', '$scope', '$state','mail'];

})();