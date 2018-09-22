'use strict';

var bcrypt = require('bcryptjs'),
    config = require('../register/auth'),
       jwt = require('jwt-simple'),
    moment = require('moment'),
   request = require('request'),
      User = require('../register/register.model');

function createJWT(user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, config.TOKEN_SECRET);
}

exports.login = function(req, res) {
    User.findOne({ email: req.body.email }, '+password', function(err, user) {
        if (!user) {
            return res.status(401).send({ message: 'Invalid email and/or password' });
        }
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (!isMatch) {
                return res.status(401).send({ message: 'Invalid email and/or password' });
            }
            res.send({ token: createJWT(user) });
        });
    });
};