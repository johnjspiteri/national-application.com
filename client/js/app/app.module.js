(function() {
    'use strict';

    angular
        .module('app', [
            'ngAnimate',
            'ngResource',
            'ngSanitize',
            'ngFileSaver',
            // 'ngTouch',
            'naif.base64',
            'uiGmapgoogle-maps',
            'ui.router',
            'ui.mask',
            'duScroll',
            'ngMaterial',
            'ngAria',
            'app.index',
            'app.question',
            'app.testimonial',
            'app.about',
            // 'app.client',
        ]);
})();
