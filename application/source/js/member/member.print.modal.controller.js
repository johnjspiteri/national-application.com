(function() {
    'use strict';

    function MemberPrintModal ($document, $scope, $window, $state, accountResolve) {

        $scope.display = true;
        $scope.member = accountResolve;
        console.log($scope.member);

        $scope.close = function () {
            $scope.display = false;
            $state.go('member.view');
        };

        $scope.print = function() {
            $window.print();
        };
    }

    angular
        .module('app.member')
        .controller('MemberPrintModal', MemberPrintModal);

    MemberPrintModal.$inject = ['$document', '$scope', '$window', '$state', 'accountResolve'];

})();