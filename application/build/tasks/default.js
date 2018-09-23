module.exports = function(grunt) {
	grunt.registerTask('default', [
		'concurrent:initialize',
		'concurrent:compile',
		'express:server',
		// 'open:server',
		'watch'
	]);
};