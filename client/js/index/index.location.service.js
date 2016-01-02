(function() {
    'use strict';

    function location ($resource) {
        return $resource("/api/location/:id", { id: "@_id" },
            {
                'query':   { method: 'GET', isArray: true },
            }
        );
    }

    angular
        .module('app.index')
        .factory('location', location);

    location.$inject = ['$resource'];

})();
