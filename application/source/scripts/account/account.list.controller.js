(function() {
    'use strict';

    function List ($scope, listResolve) {

        $scope.items = listResolve;
        console.log($scope.items);

        $scope.reset = function() {
            $scope.textFilter = '';
        };
    }

    angular
        .module('app.account')
        .controller('List', List);

    List.$inject = ['$scope', 'listResolve'];

})();