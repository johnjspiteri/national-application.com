(function() {
    'use strict';

    function MemberPrintModal ($document, $scope, $window, $state) {

        $scope.display = true;
        $scope.close = function () {
            $scope.display = false;
            $state.go('frontend.view');
        };

        $scope.print = function() {
            $window.print();
        };
        $scope.print();

    }

    angular
        .module('app.member')
        .controller('MemberPrintModal', MemberPrintModal);

    MemberPrintModal.$inject = ['$document', '$scope', '$window', '$state'];

})();