var Exhibitions = require('../models/exhibitions');

exports.all = function (req,res) {
    Exhibitions.all(function (err,docs) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
};

exports.findById = function (req,res) {
    Exhibitions.findById(req.params.id,function (err,doc) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
};

exports.create = function (req,res) {
    var exhibition={
        name:req.body.name,
        description:req.body.description,
        image:req.body.image,
        date:req.body.date,
        price:req.body.price
    };
   Exhibitions.create(exhibition,function (err,result) {
       if(err){
           console.log(err);
           res.sendStatus(500);
       }
       res.send(exhibition);
   });
};

exports.update = function (req,res) {
    Exhibitions.update(req.params.id,{name:req.body.name},function (err,result) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};

exports.delete = function (req,res) {
    Exhibitions.delete(req.params.id,function (err,result){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}