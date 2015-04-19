var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

router.sampleSchema = new Schema({
    Name: {
        type : String,
        require : true,
        trim : true
    },
    bCreate : {
        type: Boolean,
        default: true
    },
    createDate : {
        type: Date,
        default: Date.now
    },
    lastUpdate : {
        type: Date,
        default: Date.now
    },
    refID :Schema.ObjectId
});

module.exports = router;