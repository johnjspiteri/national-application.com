(function() {
    'use strict';

    function handleError(res, err) {
        return res.send(500, err);
    }

    var mongoose = require('mongoose');
    var Mail = require('./mail.model');

    exports.create = function (req, res) {
        Mail.create(req.body, function (err, data) {
            if (err) { return handleError(res, err); }
            return res.status(201).json(data);
        });
    };

})();
