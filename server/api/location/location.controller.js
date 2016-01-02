(function() {
    'use strict';

    function handleError(res, err) {
        return res.send(500, err);
    }

    var mongoose = require('mongoose');
    var Location = require('./location.model');

    exports.index = function (req,res,next) {
        Location.find({"state": req.params.id}, function (err, data) {
            if(err) {return handleError(res,err);}
            return res.status(200).json(data);
        });
    };

})();
