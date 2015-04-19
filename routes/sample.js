var express = require('express');
var router = express.Router();

var dbRepo = require('../DBRepo');

router.get('/', function(req, res) {
    var obj = {};
    obj.title = "Mr.";
    obj.name = "Worawut";
    obj.surname = "Boontan";
    res.send(obj);
});

router.get('/create',function(req,res){
    var sampleData = {};
    sampleData.Name = "Worawut Boontan";
    sampleData.bCreate = true;
    var sampleObj = new dbRepo.sampleModel(sampleData);
    sampleObj.validate(function(err){
        if(err) {
            console.log("DATA Validate Error : ");
            console.log(err);
            res.send("ERROR");
        }else{
            sampleObj.save(function(err){
                if(err) {
                    console.log(err);
                    res.send("ERROR");
                }else{
                    console.log("Data is saved.");
                    res.send(sampleObj);
                }
            });
        }
    });
});
router.post('/createnew',function(req,res){
    var sampleData = {};
    sampleData.Name = req.body.Name;
    if(req.body.bCreate !== undefined)
        sampleData.bCreate = JSON.parse(req.body.bCreate);
    sampleData.lastUpdae = new Date();
    var sampleObj = new dbRepo.sampleModel(sampleData);
    sampleObj.validate(function(err){
        if(err) {
            console.log("DATA Validate Error : ");
            console.log(err);
            res.send("ERROR");
        }else{
            sampleObj.save(function(err){
                if(err) {
                    console.log(err);
                    res.send("ERROR");
                }else{
                    console.log("Data is saved.");
                    res.send(sampleObj);
                }
            });
        }
    });
});


router.get('/read',function(req,res){
    dbRepo.sampleModel.find({})
        .lean() // Remove MongooseObject
        .exec(function (err, result) {
            res.send(result);
    });
});
router.get('/read/:id',function(req,res) {
    var _id = req.params.id;
    dbRepo.sampleModel.findOne({_id:_id})
        .lean() // Remove MongooseObject
        .exec(function (err, result) {
            res.send(result);
        });
});

router.post('/update/:id',function(req,res){
    var _id = req.params.id;
    dbRepo.sampleModel.findOne({_id:_id},function (err, result) {
       if(err){
           console.log(err);
           res.send("ERROR");
       }else{
           if(result){
               result.Name = req.body.Name;
               if(req.body.bCreate !== undefined)
                result.bCreate = JSON.parse(req.body.bCreate);
               result.lastUpdae = new Date();
               result.validate(function(err) {
                   if (err) {
                       console.log("Save data Validate Error : ");
                       console.log(err);
                       res.send("ERROR");
                   } else {
                       result.save(function (err) {
                           if (err) {
                               console.log("Save data error");
                               console.log(err);
                               res.send("ERROR");
                           } else {
                               res.send("SUCCESS");
                           }
                       })
                   }
               });
           }else{
               console.log("Not found data for update");
               res.send("SUCCESS");
           }
       }
    });
});
router.get('/delete/:id',function(req,res){
    var _id = req.params.id;
    dbRepo.sampleModel.remove({_id:_id},function(err){
        if(err){
            console.log(err);
            res.send("ERROR");
        }else{
            console.log("Data is deleted");
            res.send("SUCCESS");
        }
    })
});

module.exports = router;
