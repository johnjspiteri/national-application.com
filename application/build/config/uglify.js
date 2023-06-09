module.exports = {
    options: {
        beautify: true,
        mangle: false,
        preserveComments: true,
        compress: {
            // drop_console: false,
            sequences: false
        }
    },
    target: {
        files: {
            'public/script/app.min.js': [
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/angular/angular.min.js',
                'node_modules/angular-animate/angular-animate.min.js',
                'node_modules/angular-aria/angular-aria.min.js',
                'node_modules/angular-messages/angular-messages.min.js',
                'node_modules/angular-resource/angular-resource.min.js',
                'node_modules/angular-sanitize/angular-sanitize.min.js',
                'node_modules/lodash/index.js',
                'node_modules/angularytics/dist/angularytics.min.js',
                'node_modules/angular-simple-logger/dist/angular-simple-logger.js',
                'node_modules/angular-google-maps/dist/angular-google-maps.js',
                'node_modules/angular-scroll/angular-scroll.js',
                'node_modules/angular-ui-mask/dist/mask.js',
                'node_modules/angular-ui-router/release/angular-ui-router.js',
                'node_modules/angular-elastic/elastic.js',
                'node_modules/angular-base64-upload/dist/angular-base64-upload.js',
                'node_modules/angular-file-saver/dist/angular-file-saver.bundle.js',
                'node_modules/angular-material/angular-material.js',
                'node_modules/ng-meta/dist/ngMeta.js',
                'node_modules/satellizer/satellizer.js',
                'source/scripts/app/app.module.js',
                'source/scripts/app/app.config.js',
                'source/scripts/app/app.routes.js',
                'source/scripts/app/app.run.js',
                'source/scripts/header/header.controller.js',
                'source/scripts/header/header.member.controller.js',
                'source/scripts/header/header.backend.controller.js',
                'source/scripts/index/index.module.js',
                'source/scripts/index/index.routes.js',
                'source/scripts/index/index.escape.directive.js',
                'source/scripts/index/index.service.js',
                'source/scripts/index/index.text.service.js',
                'source/scripts/index/index.email.service.js',
                'source/scripts/index/index.location.service.js',
                'source/scripts/index/index.zip.service.js',
                'source/scripts/index/index.state.factory.js',
                'source/scripts/index/index.controller.js',
                'source/scripts/index/index.text.modal.controller.js',
                'source/scripts/index/index.email.modal.controller.js',
                'source/scripts/index/index.save.modal.controller.js',
                'source/scripts/index/index.print.modal.controller.js',
                'source/scripts/question/question.module.js',
                'source/scripts/question/question.routes.js',
                'source/scripts/question/question.controller.js',
                'source/scripts/testimonial/testimonial.module.js',
                'source/scripts/testimonial/testimonial.routes.js',
                'source/scripts/about/about.module.js',
                'source/scripts/about/about.routes.js',
                'source/scripts/about/about.contact.service.js',
                'source/scripts/about/about.controller.js',
                'source/scripts/privacy/privacy.module.js',
                'source/scripts/privacy/privacy.routes.js',
                'source/scripts/terms/terms.module.js',
                'source/scripts/terms/terms.routes.js',
                'source/scripts/member/member.module.js',
                'source/scripts/member/member.routes.js',
                'source/scripts/member/member.controller.js',
                'source/scripts/member/member.view.controller.js',
                'source/scripts/member/member.text.modal.controller.js',
                'source/scripts/member/member.email.modal.controller.js',
                'source/scripts/member/member.save.modal.controller.js',
                'source/scripts/member/member.print.modal.controller.js',
                'source/scripts/account/account.module.js',
                'source/scripts/account/account.routes.js',
                'source/scripts/account/account.service.js',
                'source/scripts/account/account.list.controller.js',
                'source/scripts/account/account.add.controller.js',
                'source/scripts/account/account.edit.controller.js',
                'source/scripts/user/user.module.js',
                'source/scripts/user/user.routes.js',
                'source/scripts/user/user.login.controller.js',
                'source/scripts/user/user.register.controller.js'
            ]
        }
    }
};
