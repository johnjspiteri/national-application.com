(function() {
    'use strict';

    function serverError() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {
                element.on('keydown', function() {
                    ctrl.$setValidity('server', true);
                    ctrl.$setValidity('required', true);
                });
            }
        };
    }

    angular
        .module('app.user')
        .directive('serverError', serverError);

})();
//
// (function() {
//     'use strict';
//
//     function format($filter) {
//         return {
//             require: '?ngModel',
//             link: function (scope, elem, attrs, ctrl) {
//                 if (!ctrl) return;
//
//
//                 ctrl.$formatters.unshift(function (a) {
//                     return $filter(attrs.format)(ctrl.$modelValue)
//                 });
//
//
//                 ctrl.$parsers.unshift(function (viewValue) {
//                     var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
//                     elem.val($filter(attrs.format)(plainNumber));
//                     return plainNumber;
//                 });
//             }
//         }
//     }
//
//     angular
//         .module('app.backend')
//         .directive('format', format);
//
//     format.$inject = ['$filter'];
// })();
