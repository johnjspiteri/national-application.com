module.exports = {
	options: {
		livereload: true
	},
	data: {
		files: 'build/data/source/**/*.json',
		tasks: 'build-data'
	},
	partials: {
		files: 'source/partials/**/*.pug',
		tasks: 'build-partials'
	},
	scripts: {
		files: [
			'api/**',
			'gruntfile.js',
			'!node_modules/**',
			'!public/scripts/app.min.js',
			'source/scripts/**/*.js',
			'!source/scripts/vendor/**'
		],
		tasks: 'build-scripts',
		options: {
			spawn: false
		}
	},
	styles: {
		files: 'source/styles/**/*.styl',
		tasks: 'build-styles'
	},
	gruntfile: {
		files: ['gruntfile.js']
	}
};