(function() {
    'use strict';

    function IndexSaveModal ($scope, $state, $window, clientResolve, FileSaver, Blob) {

        $scope.display = true;
        $scope.client = clientResolve;

        // $scope.html = 'https://s3.amazonaws.com/nationalrx/card/national_test.png';

        // $scope.trustedHtml = $sce.trustAsUrl($scope.html);
        //
        // $scope.base64 = $scope.client.card.base64;
        // console.log($scope.base64);
        //
        // function base64toBlob(base64Data) {
        //     var contentType = 'application/pdf';
        //     var sliceSize = 1024;
        //     var byteCharacters = atob(base64Data);
        //     var bytesLength = byteCharacters.length;
        //     var slicesCount = Math.ceil(bytesLength / sliceSize);
        //     var byteArrays = new Array(slicesCount);
        //
        //     for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        //         var begin = sliceIndex * sliceSize;
        //         var end = Math.min(begin + sliceSize, bytesLength);
        //
        //         var bytes = new Array(end - begin);
        //         for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
        //             bytes[i] = byteCharacters[offset].charCodeAt(0);
        //         }
        //         byteArrays[sliceIndex] = new Uint8Array(bytes);
        //     }
        //     return new Blob(byteArrays, { type: contentType });
        // }
        //
        // $scope.download = function(input) {
        //     var data = base64toBlob(input);
        //     // $window.open('data:Application/octet-stream,' + encodeURIComponent($scope.base64));
        //     FileSaver.saveAs(data, 'National Rx Card.pdf');
        // };

        $scope.close = function() {
            $scope.display = false;
            $state.go('frontend.index');
        };


    }

    angular
        .module('app.index')
        .controller('IndexSaveModal', IndexSaveModal);

    IndexSaveModal.$inject = ['$scope', '$state', '$window', 'clientResolve', 'FileSaver', 'Blob'];

})();