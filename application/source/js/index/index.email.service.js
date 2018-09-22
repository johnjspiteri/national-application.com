(function() {
    'use strict';

    function mail ($resource) {
        return $resource("/api/mail/:id", { id: "@_id" },
            {
                'create':  { method: 'POST' },
            }
        );
    }

    angular
        .module('app.index')
        .factory('mail', mail);

    mail.$inject = ['$resource'];

})();
