var Exponats = require('../models/exponats');

exports.all = function (req,res) {
    Exponats.all(function (err,docs) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
};

exports.findById = function (req,res) {
    Exponats.findById(req.params.id,function (err,doc) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
};

exports.create = function (req,res) {
    var exponat={
        name:req.body.name,
        description:req.body.description,
        image:req.body.image,
        exhibname:req.body.exhibname
    };
    Exponats.create(exponat,function (err,result) {
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
        res.send(exponat);
    });
};

exports.update = function (req,res) {
    Exponats.update(req.params.id,{name:req.body.name},function (err,result) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};

exports.delete = function (req,res) {
    Exponats.delete(req.params.id,function (err,result){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}