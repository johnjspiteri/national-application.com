module.exports = function(grunt) {
	grunt.registerTask('build-data', [
		'newer:minjson'
	]);
};