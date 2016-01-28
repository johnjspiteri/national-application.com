(function() {
    'use strict';

    function MemberTextModal ($document, $scope, $state, accountResolve, text) {

        $scope.display = true;
        $scope.member = accountResolve;

        $scope.close = function () {
            $scope.display = false;
            $state.go('member.view');
        };

        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
        };

        $scope.text = function () {
            text.create({
                destination: $scope.data.destination,
                file: $scope.member.file_url,
            });
            $scope.data = {};
            $scope.display = false;
            $scope.toTheTop();
            $scope.close();
        };

    }

    angular
        .module('app.member')
        .controller('MemberTextModal', MemberTextModal);

    MemberTextModal.$inject = ['$document', '$scope', '$state', 'accountResolve', 'text'];

})();