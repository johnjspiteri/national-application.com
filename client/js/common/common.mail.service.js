(function() {
    'use strict';

    function Mail ($resource) {
        return $resource("/api/mail/:id", { id: "@_id" },
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
        .module('app.common')
        .factory('Mail', Mail);

    Mail.$inject = ['$resource'];

})();
