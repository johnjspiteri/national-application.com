(function() {
    'use strict';

    function handleError(res, err) {
        return res.send(500, err);
    }

    var mongoose = require('mongoose');
    var Mail = require('./mail.model');

    // Get list of items
    exports.index = function (req,res,next) {
        Mail.find({}, {"images": 0}, function (err,items) {
            if (err) { return handleError(res,err); }
            return res.status(200).json(items);
        });
    };

    exports.show = function (req, res, next) {
        Mail.findOne({clean:req.params.id}, function (err, item) {
            if (err) { return handleError(res, err); }
            if (!item) { return res.sendStatus(404); }
            return res.json(item);
        });
    };

    exports.create = function (req, res) {
        Mail.create(req.body, function (err, data) {
            if (err) { return handleError(res, err); }
            return res.status(201).json(data);
        });
    };

    exports.update = function(req, res) {
        Mail.findByIdAndUpdate(req.params.id, req.body, {new: true, upsert: true}, function(err, data) {
            if (err) { return handleError(res, err); }
            res.json(data);
        })
    };

    exports.destroy = function (req, res) {
        Mail.findById(req.params.id, function (err, item) {
            if (err) { return handleError(res, err); }
            if (!item) { return res.send(404); }
            item.remove(function (err) {
                if (err) { return handleError(res, err); }
                return res.sendStatus(204);
            });
        });
    };
})();
