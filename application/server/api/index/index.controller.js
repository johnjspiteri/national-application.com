(function() {
    'use strict';

    function handleError(res, err) {
        res.status(500).send(err)
    }
    var mongoose = require('mongoose');
    var Member = require('./../member/member.model');

    exports.show = function (req, res, next) {
        console.log(req.params.id);
        Member.findOne({'plan.patient_id':req.params.id}, function (err, data) {
            if (err) {return handleError(res, err);}
            if (!data) { return res.sendStatus(404); }
            return res.json(data);
        });
    };

})();
