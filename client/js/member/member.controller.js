(function() {
    'use strict';

    function Member ($scope, member) {

        $scope.item = {};

        $scope.addItem = function() {
            console.log($scope.item.pdf);

            member.create({
                plan: $scope.item.plan,
                organization: $scope.item.organization,
                email: $scope.item.email,
                file: $scope.item.file
            });
            $scope.item = {};
            $scope.item.pdf = {};
        };
    }

    angular
        .module('app.member')
        .controller('Member', Member);

    Member.$inject = ['$scope', 'member'];

})();