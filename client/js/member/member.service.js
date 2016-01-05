(function() {
    'use strict';

    function member ($resource) {
        return $resource("/api/member/:id", { id: "@_id" },
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
        .module('app.member')
        .factory('member', member);

    member.$inject = ['$resource'];

})();
