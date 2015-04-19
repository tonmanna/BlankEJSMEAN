var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    //res.render('index', {title: 'HayharPic' ,layout: 'partial/shared'});
    var obj = {};
    obj.title = "Mr.";
    obj.name = "Worawut";
    obj.surname = "Boontan";
    res.send(obj);

});

module.exports = router;
