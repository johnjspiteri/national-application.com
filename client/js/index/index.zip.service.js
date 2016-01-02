(function() {
    'use strict';

    function zip ($resource) {
        return $resource("/api/zip/:id", { id: "@_id" },
            {
                'query':   {
                    method: 'GET',
                    isArray: true },
            }
        );
    }

    angular
        .module('app.index')
        .factory('zip', zip);

    zip.$inject = ['$resource'];

})();
