var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    //res.render('index', {title: 'HayharPic' ,layout: 'partial/shared'});
    var obj = {};
    obj.name = "tonman";
    obj.surname = "test";

    res.send(obj);

});



module.exports = router;
