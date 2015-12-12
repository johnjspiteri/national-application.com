(function() {
    'use strict';

    function CommonModalController ($scope, $document, $window, close) {

        // $scope.displayState = true;
        // $scope.settings = setting.query();
        // $scope.data = {};
        //
        // $scope.indexModalSave = function () {
        //     lead.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     }).$promise.then(function(data) {
        //         mail.create({
        //             name: data.name,
        //             email: data.email,
        //             phone: data.phone,
        //             message: data.message
        //         });
        //     });
        //     $scope.data = {};
        //     $scope.displayState = false;
        //     $scope.close();
        //     $scope.toTheTop();
        //     frontendModal.indexModalConfirm();
        //     cfpLoadingBar.complete()
        // };
        //
        // $scope.twoIndexModalSave = function () {
        //     lead.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     $scope.data = {};
        //     $scope.displayState = false;
        //     $scope.close();
        //     $scope.toTheTop();
        //
        //     mail.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     frontendModal.oneIndexModalConfirm();
        //
        // };
        // $scope.threeIndexModalSave = function () {
        //     lead.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //
        //     $scope.data = {};
        //     $scope.displayState = false;
        //     $scope.close();
        //     $scope.toTheTop();
        //
        //     mail.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     frontendModal.oneIndexModalConfirm();
        //
        // };
        // $scope.fourIndexModalSave = function () {
        //     lead.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     $scope.data = {};
        //     $scope.displayState = false;
        //     $scope.close();
        //     $scope.toTheTop();
        //
        //     mail.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     frontendModal.oneIndexModalConfirm();
        // };
        //
        // $scope.fiveIndexModalSave = function () {
        //     lead.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     $scope.data = {};
        //     $scope.displayState = false;
        //     $scope.close();
        //     $scope.toTheTop();
        //
        //     mail.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     frontendModal.fiveIndexModalConfirm();
        // };
        //
        // $scope.sixIndexModalSave = function () {
        //     lead.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     $scope.data = {};
        //     $scope.displayState = false;
        //     $scope.close();
        //     $scope.toTheTop();
        //
        //     mail.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     frontendModal.sixIndexModalConfirm();
        // };
        //
        // $scope.sevenIndexModalSave = function () {
        //     lead.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     $scope.data = {};
        //     $scope.displayState = false;
        //     $scope.close();
        //     $scope.toTheTop();
        //
        //     mail.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     frontendModal.sevenIndexModalConfirm();
        // };
        //
        // $scope.eightIndexModalSave = function () {
        //     lead.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     $scope.data = {};
        //     $scope.displayState = false;
        //     $scope.close();
        //     $scope.toTheTop();
        //
        //     mail.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     frontendModal.eightIndexModalConfirm();
        // };
        //
        // $scope.oneContactModalSave = function () {
        //     lead.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     $scope.data = {};
        //     $scope.displayState = false;
        //     $scope.close();
        //     $scope.toTheTop();
        //
        //     // mail.create({
        //     //     name: $scope.data.name,
        //     //     email: $scope.data.email,
        //     //     phone: $scope.data.phone,
        //     //     message: $scope.data.message
        //     // });
        //     frontendModal.oneContactModalConfirm();
        // };
        //
        // $scope.twoContactModalSave = function () {
        //     lead.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     $scope.data = {};
        //     $scope.displayState = false;
        //     $scope.close();
        //     $scope.toTheTop();
        //
        //     // mail.create({
        //     //     name: $scope.data.name,
        //     //     email: $scope.data.email,
        //     //     phone: $scope.data.phone,
        //     //     message: $scope.data.message
        //     // });
        //     frontendModal.twoContactModalConfirm();
        // };
        //
        // $scope.threeContactModalSave = function () {
        //     lead.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     $scope.data = {};
        //     $scope.displayState = false;
        //     $scope.close();
        //     $scope.toTheTop();
        //
        //     // mail.create({
        //     //     name: $scope.data.name,
        //     //     email: $scope.data.email,
        //     //     phone: $scope.data.phone,
        //     //     message: $scope.data.message
        //     // });
        //     frontendModal.threeContactModalConfirm();
        // };
        //
        // $scope.fourContactModalSave = function () {
        //     lead.create({
        //         name: $scope.data.name,
        //         email: $scope.data.email,
        //         phone: $scope.data.phone,
        //         message: $scope.data.message
        //     });
        //     $scope.data = {};
        //     $scope.displayState = false;
        //     $scope.close();
        //     $scope.toTheTop();
        //
        //     // mail.create({
        //     //     name: $scope.data.name,
        //     //     email: $scope.data.email,
        //     //     phone: $scope.data.phone,
        //     //     message: $scope.data.message
        //     // });
        //     frontendModal.fourContactModalConfirm();
        // };

        $scope.close = function() {
            // $scope.displayState = false;
            close();
        };

        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0);
        };
    }

    angular
        .module('app.common')
        .controller('CommonModalController', CommonModalController);

    CommonModalController.$inject = ['$scope', '$document', '$window', 'close'];

})();