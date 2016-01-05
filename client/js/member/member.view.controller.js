(function() {
    'use strict';

    function View ($scope, memberResolve) {

        $scope.member = memberResolve;

        console.log($scope.member);
    }

    angular
        .module('app.member')
        .controller('View', View);

    View.$inject = ['$scope', 'memberResolve'];

})();