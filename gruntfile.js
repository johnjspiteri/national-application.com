/*jslint node: true */
'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        config: grunt.file.readJSON('server/config/development.json'),
        banner: '/* Author: John Spiteri, http://johnspiteri.io, <%= grunt.template.today("yyyy") %> */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['client/css/index.css']
                }
            }
        },
        uglify: {
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
                    'client/js/app.min.js': [
                        'client/js/vendor/jquery/dist/jquery.min.js',
                        'client/js/vendor/angular/angular.js',
                        'client/js/vendor/angular-animate/angular-animate.js',
                        'client/js/vendor/angular-cookies/angular-cookies.js',
                        'client/js/vendor/angular-messages/angular-messages.min.js',
                        'client/js/vendor/angular-resource/angular-resource.js',
                        'client/js/vendor/angular-sanitize/angular-sanitize.js',
                        'client/js/vendor/angular-google-analytics/dist/angular-google-analytics.min.js',
                        'client/js/vendor/angular-google-maps/dist/angular-google-maps.min.js',
                        'client/js/vendor/angular-scroll/angular-scroll.js',
                        'client/js/vendor/angular-ui-mask/dist/mask.js',
                        'client/js/vendor/angular-ui-router/release/angular-ui-router.js',
                        'client/js/vendor/angular-elastic/elastic.js',
                        'client/js/vendor/lodash/dist/lodash.min.js',
                        'client/js/vendor/angular-base64-upload/dist/angular-base64-upload.js',
                        'client/js/vendor/angular-file-saver/dist/angular-file-saver.bundle.js',
                        'client/js/vendor/angular-material/angular-material.js',
                        'client/js/vendor/angular-aria/angular-aria.js',
                        'client/js/vendor/ngMeta/dist/ngMeta.js',
                        'client/js/vendor/satellizer/satellizer.js',
                        'client/js/app/app.module.js',
                        'client/js/app/app.config.js',
                        'client/js/app/app.routes.js',
                        'client/js/app/app.run.js',
                        'client/js/common/common.controller.js',
                        'client/js/header/header.controller.js',
                        'client/js/header/header.member.controller.js',
                        'client/js/header/header.backend.controller.js',
                        'client/js/index/index.module.js',
                        'client/js/index/index.routes.js',
                        'client/js/index/index.service.js',
                        'client/js/index/index.text.service.js',
                        'client/js/index/index.email.service.js',
                        'client/js/index/index.location.service.js',
                        'client/js/index/index.zip.service.js',
                        'client/js/index/index.controller.js',
                        'client/js/index/index.text.modal.controller.js',
                        'client/js/index/index.email.modal.controller.js',
                        'client/js/index/index.save.modal.controller.js',
                        'client/js/index/index.print.modal.controller.js',
                        'client/js/question/question.module.js',
                        'client/js/question/question.routes.js',
                        'client/js/question/question.controller.js',
                        'client/js/testimonial/testimonial.module.js',
                        'client/js/testimonial/testimonial.routes.js',
                        'client/js/about/about.module.js',
                        'client/js/about/about.routes.js',
                        'client/js/about/about.contact.service.js',
                        'client/js/about/about.controller.js',
                        'client/js/privacy/privacy.module.js',
                        'client/js/privacy/privacy.routes.js',
                        'client/js/terms/terms.module.js',
                        'client/js/terms/terms.routes.js',
                        'client/js/member/member.module.js',
                        'client/js/member/member.routes.js',
                        'client/js/member/member.service.js',
                        'client/js/member/member.controller.js',
                        'client/js/member/member.view.controller.js',
                        'client/js/member/member.text.modal.controller.js',
                        'client/js/member/member.email.modal.controller.js',
                        'client/js/member/member.save.modal.controller.js',
                        'client/js/member/member.print.modal.controller.js',
                        'client/js/account/account.module.js',
                        'client/js/account/account.routes.js',
                        'client/js/account/account.service.js',
                        'client/js/account/account.list.controller.js',
                        'client/js/account/account.add.controller.js',
                        'client/js/account/account.edit.controller.js',
                        'client/js/user/user.module.js',
                        'client/js/user/user.routes.js',
                        'client/js/user/user.login.controller.js',
                        'client/js/user/user.register.controller.js',
                    ]
                }
            }
        },
        stylus: {
            compile: {
                options: {
                    linenos: false,
                    compress: false,
                    firebug: false,
                    import: ['config.styl'],
                },
                files: {
                    'client/css/style.css': 'client/styl/index.styl',
                }
            },
        },
        jade: {
            compile: {
                options: {
                    pretty: false,
                },
                files: [{
                    expand: true,
                    cwd: 'client/jade',
                    src: '**/*.jade',
                    dest: 'client/html',
                    ext: '.html',
                    extDot: 'last'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 8 versions']
            },
            dist: {
                files: {
                    'client/css/style.css': 'client/css/style.css',
                }
            }
        },
        newer: {
            options: {
                cache: 'client/cache'
            }
        },
        jshint: {
            jshint: ".jshintrc",
            development: ['gruntfile.js',
            // 'client/**/*.js',
            // '!client/vendor/',
            'server/**/*.js',
            // '!node_modules'
        ],
            reporter: require('jshint-stylish')
        },
        watch: {
            options: {
                livereload: true,
            },
            stylus: {
                files: 'client/styl/**/*.styl',
                tasks: 'client'
            },
            jade: {
                files: 'client/jade/**/*.jade',
                tasks: 'client'
            },
            express: {
                files: ['client/js/**/*.js', 'server/**/*.js', '!node_modules/**', '!client/js/vendor/**'],
                tasks: 'server',
                options: {
                    spawn: false
                },
            },
            gruntfile: {
                files: ['gruntfile.js']
            }
        },
        express: {
            server: {
                options: {
                    script: './server.js',
                },
            },
        },
        'node-inspector': {
            custom: {
                options: {
                    'web-port': 9000,
                    'web-host': '<%- config.ip %>',
                    'debug-port': 5857,
                    'save-live-edit': true,
                    'no-preload': true,
                    'stack-trace-limit': 4,
                    'hidden': ['node_modules']
                }
            }
        },
        open: {
            server: {
                path: 'http://<%= config.ip %>:<%= config.port %>',
                app: 'Safari'
            }
        },
        concurrent: {
            frontend: {
                options: {
                    logConcurrentOutput: true
                },
                tasks: ['stylus', 'jade'],
            },
        }
    });
    grunt.registerTask('default', [
        'client',
        'server'
    ]);
    grunt.registerTask('client', [
        'concurrent:frontend',
        'autoprefixer',
        'uglify',
        // 'usebanner',
    ]);
    grunt.registerTask('server', [
        // 'jshint:development',
        'express:server',
        // 'node-inspector',
        // 'open:server',
        'watch'
    ]);
};
