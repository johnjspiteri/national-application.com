'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MailSchema = new Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('Mail', MailSchema);
