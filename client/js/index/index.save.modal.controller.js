(function() {
    'use strict';

    function IndexSaveModal ($scope, $state, $window) {

        $scope.display = true;
        $scope.cardUrl='https://s3.amazonaws.com/nationalrx/card/national_rx_card.png';

        $scope.close = function() {
            $scope.display = false;
            $state.go('frontend.index');
        };
    }

    angular
        .module('app.index')
        .controller('IndexSaveModal', IndexSaveModal);

    IndexSaveModal.$inject = ['$scope', '$state', '$window'];

})();