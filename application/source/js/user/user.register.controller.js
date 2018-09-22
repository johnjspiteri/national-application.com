(function() {
    'use strict';

    function Register ($auth, $state, $scope) {

        $scope.signup = function() {
            $auth.signup($scope.user)
                .then(function(response) {
                    $auth.setToken(response);
                    $state.go('backend.list');
                    // toastr.info('You have successfully created a new account and have been signed-in');
                })
                .catch(function(response) {
                    // toastr.error(response.data.message);
                });
        };
    }

    angular
        .module('app.user')
        .controller('Register', Register);

    Register.$inject = ['$auth', '$state', '$scope'];

})();