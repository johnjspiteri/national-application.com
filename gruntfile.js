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
                    'client/js/vendor.min.js': []
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
            development: ['gruntfile.js', 'client/**/*.js', '!client/vendor/', 'server/**/*.js', '!node_modules'],
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
        // 'autoprefixer',
        // 'uglify',
        // 'usebanner',
    ]);
    grunt.registerTask('server', [
        // 'jshint:development',
        'express:server',
        'open:server',
        'watch'
    ]);
};
