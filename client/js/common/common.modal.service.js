(function() {
    'use strict';

    function CommonModal ($window, ModalService) {

        return {
            saveModal : function() {
                ModalService.showModal({
                    templateUrl: 'front/modals/save-modal.html',
                    controller: 'CommonModalController',
                });
            },
            textModal : function() {
                ModalService.showModal({
                    templateUrl: 'front/modals/text-modal.html',
                    controller: 'CommonModalController',
                });
            },
            emailModal : function() {
                ModalService.showModal({
                    templateUrl: 'front/modals/email-modal.html',
                    controller: 'CommonModalController',
                });
            },
            printModal : function() {
                ModalService.showModal({
                    templateUrl: 'front/modals/print-modal.html',
                    controller: 'CommonModalController',
                });
            },

        };
    }

    angular
        .module('app.common')
        .factory('CommonModal', CommonModal);

        CommonModal.$inject = ['$window', 'ModalService'];

})();
