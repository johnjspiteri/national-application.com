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

        // $scope.authenticate = function(provider) {
        //     $auth.authenticate(provider)
        //         .then(function() {
        //             // toastr.success('You have successfully signed in with ' + provider + '!');
        //             $state.path('/');
        //         })
        //         .catch(function(error) {
        //             if (error.error) {
        //             // Popup error - invalid redirect_uri, pressed cancel button, etc.
        //             // toastr.error(error.error);
        //         } else if (error.data) {
        //             // HTTP response error from server
        //             // toastr.error(error.data.message, error.status);
        //         } else {
        //             // toastr.error(error);
        //         }
        //     });
        // };
    }

    angular
        .module('app.user')
        .controller('Login', Login);

    Login.$inject = ['$auth', '$state', '$scope'];

})();