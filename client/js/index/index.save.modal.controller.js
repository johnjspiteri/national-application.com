(function() {
    'use strict';

    function IndexSaveModal ($scope, $state, $window, indexResolve) {

        $scope.display = true;
        $scope.member = indexResolve;

        $scope.close = function() {
            $scope.display = false;
            $state.go('frontend.index');
        };
    }

    angular
        .module('app.index')
        .controller('IndexSaveModal', IndexSaveModal);

    IndexSaveModal.$inject = ['$scope', '$state', '$window', 'indexResolve'];

})();