(function() {
    'use strict';

    function handleError(res, err) {
        return res.send(500, err);
    }

    var mongoose = require('mongoose');
    var Location = require('../location/location.model');

    exports.index = function(req, res, next) {
        console.log('params:', req.params);
        Location.find({ zip: req.params.id }, function(err, data) {
            if (err) {
                return handleError(res, err);
            }
            console.log('data length', data.length);
            return res.status(200).json(data);
        });
    };
})();
