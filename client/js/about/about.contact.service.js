(function() {
    'use strict';

    function contact ($resource) {
        return $resource("/api/contact/:id", { id: "@_id" },
            {
                'create':  { method: 'POST' },
            }
        );
    }

    angular
        .module('app.about')
        .factory('contact', contact);

    contact.$inject = ['$resource'];

})();
