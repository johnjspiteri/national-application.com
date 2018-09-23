module.exports = {
	options: {
		"validateIndentation": "\t",
		"disallowClassAttributeWithStaticValue": true,
		"requireClassLiteralsBeforeAttributes": true,
		"requireIdLiteralsBeforeAttributes": true,
		"validateDivTags": true,
		"disallowDuplicateAttributes": true
	},
	lint: ['source/partials/**/*.pug']
};