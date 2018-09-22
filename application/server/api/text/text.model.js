'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TextSchema = new Schema({
	number: String,
	file: String,
	message_id: String,
	sent: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('Text', TextSchema);