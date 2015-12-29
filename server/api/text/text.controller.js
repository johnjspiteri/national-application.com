(function() {
'use strict';

var twilio = require('twilio');
var accountSid = 'ACd2197fa58583c4cc66672724cd292884';
var authToken = 'c6173fe5bc8d76e8950c5eedf123a0b6';
var client = require('twilio')(accountSid, authToken);

exports.create = function (req, res) {
    client.messages.create({
        to: req.body.destination,
        from:'+14352619004',
        body:'Here is your National Rx Card, you can use this card at over 63,000 pharmacies nationwide. If you have any questions of comments please contact us at 1-866-444-5555.',
        mediaUrl: req.body.file,
    }, function(error, message) {
        if (!error) {
            console.log('Success! The SID for this SMS message is:');
            console.log(message.sid);

            console.log('Message sent on:');
            console.log(message.dateCreated);
        } else {
            console.log('Oops! There was an error.');
            console.log(error);
        }
    })
};

})();
