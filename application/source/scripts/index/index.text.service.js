(function() {
    'use strict';

    function text ($resource) {
        return $resource("/api/text/:id", { id: "@_id" },
            {
                'create':  { method: 'POST' },
            }
        );
    }

    angular
        .module('app.index')
        .factory('text', text);

    text.$inject = ['$resource'];

})();
