(function() {
    'use strict';

    function Edit ($document, $scope, $state, editResolve, account) {

        $scope.item = editResolve;

    }

    angular
        .module('app.account')
        .controller('Edit', Edit);

    Edit.$inject = ['$document', '$scope', '$state', 'editResolve', 'account'];

})();