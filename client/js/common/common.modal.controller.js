(function() {
    'use strict';

    function CommonModalController ($scope, $document, $window, mail, close) {

        $scope.emailForm = function(){
            mail.create({
                name: $scope.user.name,
                email: $scope.user.email,

            });
            console.log($scope.user.name);
        };


        // $scope.close = function() {
        //     $rootScope.display = false;
        //     close();
        // };

        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
        };
    }

    angular
        .module('app.common')
        .controller('CommonModalController', CommonModalController);

    CommonModalController.$inject = ['$scope', '$document', '$window', 'mail', 'close'];

})();
