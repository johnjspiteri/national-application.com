module.exports = function(grunt) {
	grunt.registerTask('build-scripts', [
		'express:server',
		'watch'
	]);
};