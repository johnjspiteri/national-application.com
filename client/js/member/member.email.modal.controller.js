(function() {
    'use strict';

    function MemberEmailModal ($document, $scope, $state, mail) {

        $scope.display = true;

        $scope.close = function () {
            $scope.display = false;
            $state.go('member.view');
        };

        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
        };

        $scope.email = function () {
            mail.create({
                email: $scope.data.email,
                file: $scope.member.file_url,
            });
            $scope.user = {};
            $scope.display = false;
            $scope.toTheTop();
            $scope.close();
        };
    }

    angular
        .module('app.member')
        .controller('MemberEmailModal', MemberEmailModal);

    MemberEmailModal.$inject = ['$document', '$scope', '$state', 'mail'];

})();