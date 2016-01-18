(function() {
    'use strict';

    function MemberPrintModal ($document, $scope, $window, $state) {

        $scope.display = true;
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

    MemberPrintModal.$inject = ['$document', '$scope', '$window', '$state'];

})();