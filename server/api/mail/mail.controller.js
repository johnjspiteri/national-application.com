(function() {
'use strict';

    function handleError(res, err) {
        return res.status(500).send(err);
    }

    var mongoose = require('mongoose');
    var nodemailer = require('nodemailer');
    var sesTransport = require('nodemailer-ses-transport');
    var Mail = require('./mail.model');

    exports.create = function (req, res) {
        var message = {
            from: 'National Rx Card <delivery@nationalrxcard.com>',
            to: req.body.email,
            subject: 'National Rx Card Delivery',
            text: 'Here is your National Rx Card, you can use this card at over 63,000 pharmacies nationwide.',
            html: 'Here is your National Rx Card, you can use this card at over 63,000 pharmacies nationwide.<br><br>',
            attachments: [{
                filename: 'National Rx Card.png',
                path: req.body.file,
            }]
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
                req.body.aws_id = data.messageId;
                Mail.create(req.body, function (err, data) {
                    if (err) { return handleError(res, err); }
                    return res.status(201).json(data);
                });
            }
        });
    };

})();
