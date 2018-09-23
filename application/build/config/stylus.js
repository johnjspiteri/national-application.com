module.exports = {
	compile: {
		options: {
			linenos: false,
			compress: true,
			firebug: false,
			import: ['config.styl']
		},
		files: {
			'public/css/style.css': 'source/styles/index.styl'
		}
	}
}