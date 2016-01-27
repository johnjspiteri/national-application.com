module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    //Javascript code suggestions
    jshint: {
      files: ['Gruntfile.js', 'src/{,*/}*.js', 'test/{,*/}*.js'],
      options: {
        reporter: require('jshint-stylish'),
        globals: {
          angular: true,
          require: true,
          jasmine: true,
          module: true
        }
      }
    },
    //Test runner
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },
    //Add explicit dependency injection strings
    //to avoid errors after minification
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: 'ngMeta.js',
          dest: 'dist'
        }]
      }
    },
    //Minify the dist file
    uglify: {
      dist: {
        files: {
          'dist/ngMeta.min.js': 'dist/ngMeta.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('test', ['jshint', 'karma']);
  grunt.registerTask('dist', ['ngAnnotate', 'uglify']);
};