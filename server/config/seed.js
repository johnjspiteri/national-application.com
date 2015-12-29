"use strict";

var Client = require("../api/client/client.model");
Client.find({}).remove(function () {
    Client.create({
        plan: 114,
        organization: "Testing",
        email: "testing@testing.com",
        card: {}
    },
    function () {
        console.log("Finished populating client");
    });
});