(function() {
    'use strict';

    function IndexSaveModal ($scope, $state, $window, clientResolve, FileSaver, Blob) {

        $scope.display = true;
        $scope.client = clientResolve;

        $scope.url = 'https://s3.amazonaws.com/nationalrx/card/national_test.png';

        $scope.close = function() {
            $scope.display = false;
            $state.go('frontend.index');
        };


    }

    angular
        .module('app.index')
        .controller('IndexSaveModal', IndexSaveModal);

    IndexSaveModal.$inject = ['$scope', '$state', '$window', 'clientResolve', 'FileSaver', 'Blob'];

})();