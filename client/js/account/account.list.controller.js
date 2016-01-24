(function() {
    'use strict';

    function List ($scope, listResolve) {

        $scope.items = listResolve;

    }

    angular
        .module('app.account')
        .controller('List', List);

    List.$inject = ['$scope', 'listResolve'];

})();