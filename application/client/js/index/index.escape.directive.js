(function() {
	'use strict';

		function escKey ($document) {
			return function (scope, element, attrs) {
				$document.bind('keydown keypress', function (event) {
					if(event.which === 27) {
						scope.$apply(function (){
							scope.$eval(attrs.escKey);
						});

						event.preventDefault();
					}
				});
			};
		}

	angular
		.module('app.index')
		.directive('escKey', escKey);

	escKey.$inject = ['$document'];

})();