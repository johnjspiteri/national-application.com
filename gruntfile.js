/*jslint node: true */

module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        uglify: {
            options: {
                beautify: false,
                mangle: false,
                preserveComments: true,
                compress: {
                    // drop_console: false,
                    sequences: false
                }
            },
            target: {
                files: {
                    'public/js/app.min.js': [
                        /* vendor */
                        /* app */
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
                    // paths: 'client/styl/**',
                    import: ['config.styl'],
                },
                files: {
                    'client/css/index.css': 'client/styl/index.styl',
                }
            },
        },
        jade: {
            compile: {
                options: {
                    pretty: true,
                },
                files: [{
                    expand: true,
                    cwd: 'client/jade',
                    src: '**/*.jade',
                    dest: 'client/html',
                    ext: '.html'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 8 versions']
            },
            dist: {
                files: {
                    'client/css/index.css': 'client/css/index.css'
                }
            }
        },
        newer: {
            options: {
                cache: 'client/cache'
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            stylus: {
                files: 'client/styl/**/*.styl',
                tasks: 'refresh-frontend'
            },
            jade: {
                files: 'client/jade/**/*.jade',
                tasks: 'refresh-frontend'
            },
            // express: {
            //     files: ['public/js/**/*.js', 'app/**/*.js', '!node_modules/**', '!public/js/vendor/**', '!source/**'],
            //     tasks: 'server',
            //     options: {
            //         spawn: false
            //     },
            // },
            gruntfile: {
                files: ['gruntfile.js']
            }
        },
        express: {
            options: {
                port: 8080,
                hostname: '192.168.1.78',
                debug: true,
            },
            dev: {
                options: {
                    script: 'server.js',
                },
            },
        },
        'node-inspector': {
            custom: {
                options: {
                    'web-port': 8080,
                    'web-host': '192.168.1.78',
                    'debug-port': 5857,
                    'save-live-edit': true,
                    'no-preload': true,
                    'stack-trace-limit': 4,
                    'hidden': ['node_modules']
                }
            }
        },
        concurrent: {
            frontend: {
                options: {
                    logConcurrentOutput: true
                },
                tasks: ['stylus', 'jade'],
            },
            backend: {
                options: {
                    logConcurrentOutput: true
                },
                tasks: ['watch'],
            }
        }
    });
    grunt.registerTask('default', [
        'concurrent:frontend',
        // 'autoprefixer',
        // 'uglify',
        'express:dev',
        'concurrent:backend'
    ]);
    grunt.registerTask('refresh-frontend', [
        'concurrent:frontend',
    ]);
    grunt.registerTask('server', [
    ]);
};
