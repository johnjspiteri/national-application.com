(function() {
    'use strict';

    function IndexEmailModal ($document, $scope, $state, mail) {

        $scope.display = true;
        $scope.cardUrl='https://s3.amazonaws.com/nationalrx/card/national_test.png';

        $scope.close = function () {
            $scope.display = false;
            $state.go('frontend.index');
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
        .module('app.index')
        .controller('IndexEmailModal', IndexEmailModal);

    IndexEmailModal.$inject = ['$document', '$scope', '$state', 'mail'];

})();