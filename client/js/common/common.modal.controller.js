(function() {
    'use strict';

    function CommonModalController ($rootScope, $scope, $document, $window, Mail, close) {

        $scope.emailForm = function(){
            console.log("Triggered");
            Mail.create({
                name: "name",
                email: "email",

            });
        };


        $scope.close = function() {
            $rootScope.display = false;
            close();
        };

        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
        };
    }

    angular
        .module('app.common')
        .controller('CommonModalController', CommonModalController);

    CommonModalController.$inject = ['$rootScope', '$scope', '$document', '$window', 'Mail', 'close'];

})();
