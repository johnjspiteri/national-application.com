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
        var client = {
            from: 'National Rx Card <info@nationalrxcard.com>',
            to: req.body.email,
            subject: 'National Rx Card Contact',
            text: 'Thank you for contacting us. We will respond within three business days.',
        };

        var message = {
            from: req.body.email,
            to: 'National Rx Card <info@nationalrxcard.com>',
            subject: 'National Rx Card Contact',
            text: 'Thank you for contacting us. We will respond within three business days.',
        };

        var transport = nodemailer.createTransport(sesTransport({
            accessKeyId: "AKIAINA5UIHF3IA4NUPA",
            secretAccessKey: "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",
            ServiceUrl: "https://email.us-east-1.amazonaws.com",
            rateLimit: 1
        }));

        transport.sendMail(client, function(error, data){
            if(error){
                console.log(error);
            } else {
                req.body.aws_id = data.messageId;
                Contact.create(req.body, function (err, data) {
                    if (err) { return handleError(res, err); }
                    return res.status(201).json(data);
                });
            }
        });

        transport.sendMail(message, function(error, data){
            if(error){
                console.log(error);
            } else {
                console.log(data);                            
            }
        });
    };

})();
