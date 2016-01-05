(function() {
    'use strict';

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var MemberSchema = new Schema({
        clean: String,
        plan: {
            title: String,
            bin: String,
            pcn: String,
            group: String,
            patient_id: String,
        },
        organization: String,
        email: String,
        file_url: String
    });

    MemberSchema
        .index({ clean: 1 })
        .pre('save', function (next) {
            this.clean = (this.organization).replace(/[\s:,!?]/g, '-').replace(/--/g, '-').replace(/-$/, '').toLowerCase();
        next();
    });



    module.exports = mongoose.model('Member', MemberSchema);

})();