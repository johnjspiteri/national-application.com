(function() {
    'use strict';

    function handleError(res, err) {
        return res.status(500).send(err);
    }

    var mongoose = require('mongoose');
    var nodemailer = require('nodemailer');
    var sesTransport = require('nodemailer-ses-transport');
    var Contact = require('./contact.model');

    exports.create = function (req, res) {
        var message = {
            from: 'National Rx Card <info@nationalrxcard.com>',
            to: req.body.email,
            subject: 'National Rx Card Contact',
            text: 'Thank you for contacting us. We will respond within one business day.',
        };

        var transport = nodemailer.createTransport(sesTransport({
            accessKeyId: "AKIAINA5UIHF3IA4NUPA",
            secretAccessKey: "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",
            ServiceUrl: "https://email.us-east-1.amazonaws.com",
            rateLimit: 1
        }));

        transport.sendMail(message, function(error, data){
            if(error){
                console.log(error);
            } else {
                console.log(data);
                req.body.aws_id = data.messageId;
                Contact.create(req.body, function (err, data) {
                    if (err) { return handleError(res, err); }
                    return res.status(201).json(data);
                });
            }
        });
    };

})();
