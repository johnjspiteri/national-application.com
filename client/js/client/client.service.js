(function() {
    'use strict';

    function client ($resource) {
        return $resource("/api/client/:id", { id: "@_id" },
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
        .module('app.client')
        .factory('client', client);

    client.$inject = ['$resource'];

})();
