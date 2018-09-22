(function() {
    'use strict';

    function account ($resource) {
        return $resource("/api/account/:id", { id: "@_id" },
            {
                'create':  { method: 'POST' },
                'query':   { method: 'GET', isArray: true },
                'show':    { method: 'GET', isArray: false },
                'update':  { method: 'PUT' },
                'destroy': { method: 'DELETE' }
            }
        );
    }

    angular
        .module('app.account')
        .factory('account', account);

    account.$inject = ['$resource'];

})();
