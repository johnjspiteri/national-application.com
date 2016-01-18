(function() {
    'use strict';

    function index ($resource) {
        return $resource("/api/index/:id", { id: "@_id" },
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
        .module('app.index')
        .factory('index', index);

    index.$inject = ['$resource'];

})();
