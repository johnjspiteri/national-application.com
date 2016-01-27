(function() {
    'use strict';

    function Login ($auth, $state, $scope) {

    $scope.login = function() {
        $auth.login($scope.user)
            .then(function() {
            // toastr.success('You have successfully signed in!');
                $state.go('backend.list');
            })
            .catch(function(error) {
            // toastr.error(error.data.message, error.status);
            });
        };
    }

    angular
        .module('app.user')
        .controller('Login', Login);

    Login.$inject = ['$auth', '$state', '$scope'];

})();