'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    plan: Number,
    organization: String,
    email: String,
    card: Object
});

module.exports = mongoose.model('Client', ClientSchema);