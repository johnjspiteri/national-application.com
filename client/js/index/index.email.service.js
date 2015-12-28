(function() {
    'use strict';

    function mail ($resource) {
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
        .module('app.index')
        .factory('mail', mail);

    mail.$inject = ['$resource'];

})();
