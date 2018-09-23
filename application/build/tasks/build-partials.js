module.exports = function(grunt) {
	grunt.registerTask('build-partials', [
		'puglint',
		'pug'
	]);
};