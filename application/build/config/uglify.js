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
                'node_modules/angular/angular.js',
                'node_modules/angular-animate/angular-animate.js',
                'node_modules/angular-aria/angular-aria.js',
                'node_modules/lodash/dist/lodash.min.js',
                'node_modules/angular-base64-upload/dist/angular-base64-upload.js',
                'node_modules/angular-material/angular-material.js',
                'node_modules/angular-resource/angular-resource.js',
                'node_modules/angular-ui-router/release/angular-ui-router.js',
                'node_modules/angular-socket-io/socket.js',
                'node_modules/satellizer/dist/satellizer.js',

                'source/scripts/app/module.js',
                'source/scripts/app/route.js',
                'source/scripts/app/config.js',
                'source/scripts/app/run.js',
                'source/scripts/common/module.js',
                'source/scripts/common/directive/email.check.js',
                'source/scripts/common/directive/user.check.js',
                'source/scripts/common/directive/escape.js',
                'source/scripts/common/filter/instrument.js',
                'source/scripts/common/factory/date.js',
                'source/scripts/common/factory/lesson.js',
                'source/scripts/common/factory/setting.js',
                'source/scripts/common/factory/socket.js',
                'source/scripts/common/factory/user.js',
                'source/scripts/common/service/lesson/service.js',
                'source/scripts/public/public.module.js',
                'source/scripts/public/public.route.js',

                'source/scripts/public/header/public.header.controller.js',
                'source/scripts/public/panel/public.panel.controller.js',

                'source/scripts/public/about/public.about.module.js',
                'source/scripts/public/about/public.about.route.js',

                'source/scripts/public/about/faq/public.about.faq.module.js',
                'source/scripts/public/about/faq/public.about.faq.route.js',

                'source/scripts/public/about/faq/list/public.about.faq.list.module.js',
                'source/scripts/public/about/faq/list/filter/public.about.faq.filter.category.js',
                'source/scripts/public/about/faq/list/filter/public.about.faq.filter.sub.category.js',
                'source/scripts/public/about/faq/list/public.about.faq.list.service.js',
                'source/scripts/public/about/faq/list/public.about.faq.list.controller.js',

                'source/scripts/public/about/faq/view/public.about.faq.view.module.js',
                'source/scripts/public/about/faq/view/public.about.faq.view.route.js',
                'source/scripts/public/about/faq/view/public.about.faq.view.service.js',
                'source/scripts/public/about/faq/view/public.about.faq.view.controller.js',

                'source/scripts/public/about/student/public.about.student.module.js',
                'source/scripts/public/about/student/public.about.student.route.js',
                'source/scripts/public/about/student/public.about.student.controller.js',

                'source/scripts/public/about/teacher/public.about.teacher.module.js',
                'source/scripts/public/about/teacher/public.about.teacher.route.js',
                'source/scripts/public/about/teacher/public.about.teacher.controller.js',

                'source/scripts/public/error/public.error.module.js',
                'source/scripts/public/error/public.error.route.js',
                'source/scripts/public/error/public.error.controller.js',

                'source/scripts/public/forgot/public.forgot.module.js',
                'source/scripts/public/forgot/public.forgot.route.js',
                'source/scripts/public/forgot/public.forgot.service.js',
                'source/scripts/public/forgot/public.forgot.controller.js',
                'source/scripts/public/forgot/send/public.forgot.send.controller.js',

                'source/scripts/public/register/public.register.module.js',
                'source/scripts/public/register/public.register.route.js',
                'source/scripts/public/register/public.register.controller.js',
                'source/scripts/public/register/public.register.form.controller.js',

                'source/scripts/public/register/form/public.register.form.module.js',
                'source/scripts/public/register/form/public.register.form.route.js',
                'source/scripts/public/register/form/complete/public.register.form.complete.module.js',
                'source/scripts/public/register/form/complete/public.register.form.complete.controller.js',
                'source/scripts/public/register/form/complete/public.register.form.complete.route.js',
                'source/scripts/public/register/form/confirm/public.register.form.confirm.module.js',
                'source/scripts/public/register/form/confirm/public.register.form.confirm.controller.js',
                'source/scripts/public/register/form/confirm/public.register.form.confirm.route.js',
                'source/scripts/public/register/form/policy/public.register.form.policy.module.js',
                'source/scripts/public/register/form/policy/public.register.form.policy.service.js',
                'source/scripts/public/register/form/policy/public.register.form.policy.controller.js',
                'source/scripts/public/register/form/policy/public.register.form.policy.route.js',
                'source/scripts/public/register/form/token/public.register.form.token.module.js',
                'source/scripts/public/register/form/token/public.register.form.token.route.js',
                'source/scripts/public/register/form/token/public.register.form.token.service.js',
                'source/scripts/public/register/form/token/public.register.form.token.controller.js',

                'source/scripts/public/login/public.login.module.js',
                'source/scripts/public/login/public.login.route.js',
                'source/scripts/public/login/public.login.controller.js',

                'source/scripts/public/policy/public.policy.module.js',
                'source/scripts/public/policy/public.policy.route.js',
                'source/scripts/public/policy/public.policy.controller.js',
                'source/scripts/public/privacy/public.privacy.module.js',
                'source/scripts/public/privacy/public.privacy.route.js',
                'source/scripts/public/privacy/public.privacy.controller.js',

                'source/scripts/public/reset/public.reset.module.js',
                'source/scripts/public/reset/public.reset.route.js',
                'source/scripts/public/reset/public.reset.service.js',
                'source/scripts/public/reset/public.reset.controller.js',
                'source/scripts/public/reset/send/public.reset.send.controller.js',

                'source/scripts/public/teacher/public.teacher.module.js',
                'source/scripts/public/teacher/public.teacher.service.js',
                'source/scripts/public/teacher/public.teacher.factory.js',
                'source/scripts/public/teacher/list/public.teacher.list.module.js',
                'source/scripts/public/teacher/list/public.teacher.list.route.js',
                'source/scripts/public/teacher/list/public.teacher.list.controller.js',
                'source/scripts/public/teacher/view/public.teacher.view.module.js',
                'source/scripts/public/teacher/view/public.teacher.view.route.js',
                'source/scripts/public/teacher/view/public.teacher.view.controller.js',

                'source/scripts/public/terms/public.terms.module.js',
                'source/scripts/public/terms/public.terms.route.js',
                'source/scripts/public/terms/public.terms.controller.js',

                'source/scripts/public/contact/public.contact.module.js',
                'source/scripts/public/contact/public.contact.route.js',
                'source/scripts/public/contact/public.contact.controller.js',

                'source/scripts/private/private.module.js',
                'source/scripts/private/private.route.js',

                'source/scripts/private/header/private.header.controller.js',
                'source/scripts/private/header/profile/private.header.profile.controller.js',

                'source/scripts/private/panel/private.panel.controller.js',
                'source/scripts/private/note/private.note.controller.js',

                'source/scripts/private/friend/private.friend.module.js',
                'source/scripts/private/friend/private.friend.filter.status.js',

                'source/scripts/private/friend/list/private.friend.list.module.js',
                'source/scripts/private/friend/list/private.friend.list.service.js',
                'source/scripts/private/friend/list/private.friend.list.controller.js',
                'source/scripts/private/friend/list/private.friend.list.route.js',

                'source/scripts/private/friend/list/add/private.friend.list.add.module.js',
                'source/scripts/private/friend/list/add/private.friend.list.add.service.js',
                'source/scripts/private/friend/list/add/private.friend.list.add.route.js',

                'source/scripts/private/friend/list/accept/private.friend.list.accept.module.js',
                'source/scripts/private/friend/list/accept/private.friend.list.accept.service.js',

                'source/scripts/private/friend/list/remind/private.friend.list.remind.module.js',
                'source/scripts/private/friend/list/remind/private.friend.list.remind.service.js',

                'source/scripts/private/friend/list/invite/private.friend.list.invite.module.js',
                'source/scripts/private/friend/list/invite/private.friend.list.invite.service.js',

                'source/scripts/private/friend/list/delete/private.friend.list.delete.module.js',
                'source/scripts/private/friend/list/delete/private.friend.list.delete.service.js',

                'source/scripts/private/friend/list/add/token/private.friend.list.add.token.module.js',
                'source/scripts/private/friend/list/add/token/private.friend.list.add.token.service.js',
                'source/scripts/private/friend/list/add/token/private.friend.list.add.token.controller.js',
                'source/scripts/private/friend/list/add/token/private.friend.list.add.token.route.js',

                'source/scripts/private/friend/list/add/expired/private.friend.list.add.expired.module.js',
                'source/scripts/private/friend/list/add/expired/private.friend.list.add.expired.route.js',
                'source/scripts/private/friend/list/add/expired/private.friend.list.add.expired.controller.js',

                'source/scripts/private/friend/list/add/complete/private.friend.list.add.complete.module.js',
                'source/scripts/private/friend/list/add/complete/private.friend.list.add.complete.route.js',
                'source/scripts/private/friend/list/add/complete/private.friend.list.add.complete.controller.js',

                'source/scripts/private/dashboard/private.dashboard.module.js',
                'source/scripts/private/dashboard/private.dashboard.controller.js',
                'source/scripts/private/dashboard/private.dashboard.route.js',

                'source/scripts/private/meeting/private.meeting.module.js',
                'source/scripts/private/meeting/private.meeting.controller.js',
                'source/scripts/private/meeting/private.meeting.route.js',

                'source/scripts/private/schedule/private.schedule.module.js',
                'source/scripts/private/schedule/navigation/private.schedule.navigation.route.js',
                'source/scripts/private/schedule/navigation/private.schedule.navigation.controller.js',

                'source/scripts/private/schedule/student/private.schedule.student.controller.js',
                'source/scripts/private/schedule/student/private.schedule.student.route.js',

                'source/scripts/private/schedule/student/confirm/private.schedule.student.confirm.controller.js',
                'source/scripts/private/schedule/student/confirm/private.schedule.student.confirm.route.js',

                'source/scripts/private/schedule/teacher/private.schedule.teacher.route.js',
                'source/scripts/private/schedule/teacher/private.schedule.teacher.controller.js',

                'source/scripts/private/schedule/teacher/create/private.schedule.teacher.create.controller.js',
                'source/scripts/private/schedule/teacher/create/private.schedule.teacher.create.route.js',

                'source/scripts/private/schedule/teacher/create/username-list/private.schedule.teacher.create.username-list.service.js',

                'source/scripts/private/schedule/teacher/lesson/private.schedule.teacher.lesson.controller.js',
                'source/scripts/private/schedule/teacher/lesson/private.schedule.teacher.lesson.route.js',

                'source/scripts/private/schedule/teacher/lesson/edit/private.schedule.teacher.lesson.edit.controller.js',
                'source/scripts/private/schedule/teacher/lesson/edit/private.schedule.teacher.lesson.edit.route.js',

                'source/scripts/private/settings/private.settings.module.js',
                'source/scripts/private/settings/private.settings.route.js',
                'source/scripts/private/settings/credits/private.settings.credits.module.js',
                'source/scripts/private/settings/credits/private.settings.credits.route.js',
                'source/scripts/private/settings/credits/billing/private.settings.credits.billing.module.js',
                'source/scripts/private/settings/credits/billing/private.settings.credits.billing.controller.js',
                'source/scripts/private/settings/credits/billing/private.settings.credits.billing.route.js',
                'source/scripts/private/settings/credits/payment/private.settings.credits.payment.module.js',
                'source/scripts/private/settings/credits/payment/private.settings.credits.payment.controller.js',
                'source/scripts/private/settings/credits/payment/private.settings.credits.payment.route.js',
                'source/scripts/private/settings/credits/selection/private.settings.credits.selection.module.js',
                'source/scripts/private/settings/credits/selection/private.settings.credits.selection.controller.js',
                'source/scripts/private/settings/credits/selection/private.settings.credits.selection.route.js',
                'source/scripts/private/settings/notification/private.settings.notification.module.js',
                'source/scripts/private/settings/notification/private.settings.notification.controller.js',
                'source/scripts/private/settings/notification/private.settings.notification.route.js',
                'source/scripts/private/settings/profile/private.settings.profile.module.js',
                'source/scripts/private/settings/profile/private.settings.profile.controller.js',
                'source/scripts/private/settings/profile/private.settings.profile.route.js',
                'source/scripts/private/settings/profile/private.settings.profile.service.js',
                'source/scripts/private/settings/profile/credentials/private.settings.profile.credentials.controller.js',
                'source/scripts/private/settings/profile/instruments/private.settings.profile.instruments.controller.js',
                'source/scripts/private/settings/security/private.settings.security.module.js',
                'source/scripts/private/settings/security/private.settings.security.controller.js',
                'source/scripts/private/settings/security/private.settings.security.route.js',
                'source/scripts/private/settings/security/private.settings.security.service.js',

                'source/scripts/admin/admin.module.js',
                'source/scripts/admin/admin.route.js',
                'source/scripts/admin/statistics/admin.statistics.controller.js',
                'source/scripts/admin/management/admin.management.controller.js'
            ]
        }
    }
};
