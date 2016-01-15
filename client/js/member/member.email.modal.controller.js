(function() {
    'use strict';

    function MemberEmailModal ($document, $scope, $state, mail) {

        $scope.display = true;

        $scope.close = function () {
            $scope.display = false;
            $state.go('frontend.view');
        };

        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
        };

        $scope.email = function () {
            mail.create({
                email: $scope.data.email,
                file: $scope.cardUrl,
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