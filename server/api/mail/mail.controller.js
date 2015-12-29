(function() {
'use strict';

var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');
var Mail = require('./mail.model');

exports.create = function (req, res) {
    // var userEmail = req.body.name + ' <' + req.body.email + '>';

    var message = {
        from: 'National Rx Card <delivery@nationalrxcard.com>',
        to: req.body.email,
        subject: 'National Rx Card Delivery',
        text: 'Here is your National Rx Card, you can use this card at over 63,000 pharmacies nationwide.',
        // html: ''
        attachments: [{
            filename: 'National Rx Card.pdf',
            content: req.body.attachment,
            encoding: 'base64'
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
            console.log(data);
        }
    });
};

})();
