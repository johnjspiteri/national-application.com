'use strict';

var bcrypt = require('bcryptjs'),
    config = require('./auth'),
    moment = require('moment'),
       jwt = require('jwt-simple'),
   request = require('request'),
      User = require('./register.model');

function createJWT(user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, config.TOKEN_SECRET);
}

exports.register = function(req, res) {
    User.findOne({ email: req.body.email }, function(err, existingUser) {
        if (existingUser) {
            return res.status(409).send({ message: 'Email is already taken' });
        }
        var user = new User({
            displayName: req.body.displayName,
            email: req.body.email,
            password: req.body.password
        });
        user.save(function(err, result) {
            if (err) {
                res.status(500).send({ message: err.message });
            }
            res.send({ token: createJWT(result) });
        });
    });
};