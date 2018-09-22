(function() {
    'use strict';

    function MemberSaveModal ($scope, $state, $window, accountResolve) {

        $scope.display = true;
        $scope.member = accountResolve;

        $scope.close = function() {
            $scope.display = false;
            $state.go('member.view');
        };
    }

    angular
        .module('app.member')
        .controller('MemberSaveModal', MemberSaveModal);

    MemberSaveModal.$inject = ['$scope', '$state', '$window', 'accountResolve'];

})();