var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var config = {
    host : 'localhost',
    port : '27017',
    db : 'sample'
};

router.getMongoCon = function (cb) {
    var uri = 'mongodb://'+config.host+':'+config.port+'/'+config.db;
    var db = mongoose.createConnection(uri);
    db.on('open', function callback () {
        console.log("DB Connect Success");
    });
    db.on('error', function(err){
        console.log("DB Connect ERROR:" + err);
    });
    cb(db);
};

module.exports = router;