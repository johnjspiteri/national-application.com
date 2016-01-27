(function() {
    'use strict';

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var AccountSchema = new Schema({
        clean: String,
        image: Object,
        plan: {
            bin: String,
            pcn: String,
            group: String,
            patient_id: String,
        },
        organization: String,
        email: String,
        file_url: String
    });

    module.exports = mongoose.model('Account', AccountSchema);

})();