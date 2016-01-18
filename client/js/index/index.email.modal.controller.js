(function() {
    'use strict';

    function IndexEmailModal ($document, $scope, $state, mail, indexResolve) {

        $scope.display = true;
        $scope.member = indexResolve;

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
                file: $scope.member.file_url,
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

    IndexEmailModal.$inject = ['$document', '$scope', '$state', 'mail', 'indexResolve'];

})();