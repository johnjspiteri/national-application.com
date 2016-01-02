'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
    "name": String,
    "address1": String,
    "address2": String,
    "city": String,
    "state": String,
    "zip": String,
    "zip+4": String,
    "phone": String
});

module.exports = mongoose.model('Location', LocationSchema);
