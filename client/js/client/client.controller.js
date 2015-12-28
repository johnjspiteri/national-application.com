(function() {
    'use strict';

    function Client ($scope, client) {

        $scope.item = {};

        $scope.addItem = function() {
            console.log($scope.item.pdf);

            client.create({
                plan: $scope.item.plan,
                organization: $scope.item.organization,
                email: $scope.item.email,
                card: $scope.item.pdf
            });
            $scope.item = {};
            $scope.item.pdf = {};
        };
    }

    angular
        .module('app.client')
        .controller('Client', Client);

    Client.$inject = ['$scope', 'client'];

})();