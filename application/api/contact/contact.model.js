'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
    email: String,
    aws_id: String,
    message: String,
    name: String,
    phone: Number,
});

module.exports = mongoose.model('Contact', ContactSchema);
