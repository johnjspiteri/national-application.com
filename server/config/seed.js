"use strict";

var Client = require('../api/client/client.model');
Client.find({}).remove(function () {
    Client.create({
        plan: 114,
        organization: 'Testing',
        email: 'testing@testing.com',
        file: 'https://s3.amazonaws.com/nationalrx/card/national_rx_card.png'
    },
    function () {
        console.log('Finished populating client');
    });
});