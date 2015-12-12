(function() {
    'use strict';

    function CommonIndexController ($scope) {

        $scope.state= false;



    }

    angular
        .module('app.common')
        .controller('CommonIndexController', CommonIndexController);

    CommonIndexController.$inject = ['$scope'];

})();
