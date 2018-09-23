module.exports = {
	compile: {
		options: {
			data: {
				debug: true
			}
		},
		files: [{
			expand: true,
			cwd: 'source/partials',
			src: '**/*.pug',
			dest: 'public/html',
			ext: '.html',
			extDot: 'last'
		}]
	}
}