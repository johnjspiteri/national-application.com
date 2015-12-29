(function() {
    'use strict';

    function IndexEmailModal ($document, $scope, $state, clientResolve, mail) {

        $scope.display = true;
        $scope.client = clientResolve;
        console.log($scope.client.card.base64);

        $scope.close = function () {
            $scope.display = false;
            $state.go('frontend.index');
        };

        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
        };

        $scope.emailForm = function () {
            mail.create({
                email: $scope.user.email,
                attachment: $scope.client.card.base64,
            });
            $scope.user = {};
            $scope.display = false;
            $scope.toTheTop();
            $scope.close();
        };
    }

    angular
        .module('app.index')
        .controller('IndexEmailModal', IndexEmailModal);

    IndexEmailModal.$inject = ['$document', '$scope', '$state', 'clientResolve', 'mail'];

})();