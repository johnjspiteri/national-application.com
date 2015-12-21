(function() {
    'use strict';

    function About ($scope) {

        $scope.contact = true;

        

    }

    angular
        .module('app')
        .controller('About', About);

    About.$inject = ['$scope'];

})();