var express = require('express');
var router = express.Router();

var CG = require('./CG');
var DB = require('./DB');

var connector;
CG.getMongoCon(function (conn) {
    connector = conn;
    router.sampleModel = connector.model('sample', DB.sampleSchema);
});

module.exports = router;