(function() {
'use strict';

var twilio = require('twilio');
var client = new twilio.RestClient('AC0fd3170cc93470170ba8a6018bf0a8fe', 'dfbbd8c65a01e87a75dcf24082814dd3');

exports.create = function (req, res) {

    client.sendSms({
        to: req.body.destination,
        from:'+15005550006',
        body:'ahoy boy! Testing texting from server... Johnny Boy'
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
