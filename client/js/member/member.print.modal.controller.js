(function() {
    'use strict';

    function MemberPrintModal ($document, $scope, $window, $state, memberResolve) {

        $scope.display = true;
        $scope.member = memberResolve;
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

    MemberPrintModal.$inject = ['$document', '$scope', '$window', '$state', 'memberResolve'];

})();