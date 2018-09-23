(function() {
    'use strict';

    function runBlock($rootScope, $state, $stateParams, $location) {
        $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
        // Angularytics.init();

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $state.go('frontend.index');
    }

    angular.module('app').run(runBlock);

    runBlock.$inject = ['$rootScope', '$state', '$stateParams', '$location'];
})();
