(function() {
    'use strict';

    function runBlock ($rootScope, $state, $stateParams, $location) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
        $rootScope.display = false;
        $rootScope.applicationState = false;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $state.go('index.start');
    }

    angular
        .module('app')
        .run(runBlock);

    runBlock.$inject = ['$rootScope', '$state', '$stateParams', '$location'];

})();
