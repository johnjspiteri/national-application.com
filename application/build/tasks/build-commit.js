module.exports = function(grunt) {
	grunt.registerTask('build-partials', [
		'concurrent: initialize',
		'concurrent: compile'
	]);
};