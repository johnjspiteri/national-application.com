'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MailSchema = new Schema({
	email: String,
	file: String,
	message_id: String,
	sent: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('Mail', MailSchema);
