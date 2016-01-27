(function() {
    'use strict';

    angular
        .module('app', [
            'ngAnimate',
            'ngResource',
            'ngSanitize',
            'angular-google-analytics',
            'ngFileSaver',
            'satellizer',
            'monospaced.elastic',
            'ngMeta',
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
            'app.privacy',
            'app.terms',
            'app.member',
            'app.account',
            'app.user',
        ]);
})();
