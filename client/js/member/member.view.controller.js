(function() {
    'use strict';

    function View ($scope, memberResolve) {

        $scope.member = memberResolve;

    }

    angular
        .module('app.member')
        .controller('View', View);

    View.$inject = ['$scope', 'memberResolve'];

})();