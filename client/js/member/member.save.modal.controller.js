(function() {
    'use strict';

    function MemberSaveModal ($scope, $state, $window) {

        $scope.display = true;

        $scope.close = function() {
            $scope.display = false;
            $state.go('frontend.view');
        };
    }

    angular
        .module('app.member')
        .controller('MemberSaveModal', MemberSaveModal);

    MemberSaveModal.$inject = ['$scope', '$state', '$window'];

})();