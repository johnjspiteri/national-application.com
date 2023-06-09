(function() {
    'use strict';

    function handleError(res, err) {
        res.status(500).send(err)
    }
    var mongoose = require('mongoose');
    var Account = require('./../account/account.model');

    exports.index = function (req,res,next) {
        Account.find({}, function (err,data) {
            if (err) { return handleError(res,err); }
            return res.status(200).json(data);
        });
    };
    exports.show = function (req, res, next) {
        console.log(req.params.id);
        Account.findOne({clean:req.params.id}, function (err, data) {
            if (err) {return handleError(res, err);}
            if (!data) { return res.sendStatus(404); }
            return res.json(data);
        });
    };
    exports.create = function (req, res) {
        Account.create(req.body, function (err, data) {
            if (err) { return handleError(res, err); }
            return res.status(201).json(data);
        });
    };
    exports.update = function(req, res) {
        Account.findByIdAndUpdate(req.params.id, req.body, {new: true, upsert: true}, function(err, data) {
            if (err) { return handleError(res, err); }
            res.json(data);
        })
    };
    exports.destroy = function (req, res) {
        Account.findById(req.params.id, function (err, data) {
            if (err) { return handleError(res, err); }
            if (!data) { return res.send(404); }
            data.remove(function (err) {
                if (err) { return handleError(res, err); }
                return res.sendStatus(204);
            });
        });
    };

})();
