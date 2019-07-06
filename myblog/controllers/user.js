var User_model = require('../models/user_model.js')

exports.index = function(req, res, next){
    res.render("index.ejs",{title:'new title'})
}

exports.reg = function(req, res, next){
    res.render('reg.ejs');
}

exports.do_reg = function(req, res, next){
    model.insert_data(name,password,function(err,data){
    });var name = req.body.email;
    var password = req.body.pwd;
    console.log("ing");
    User_
}

exports.login = function(req, res, next){
    res.render('login.ejs');
}

exports.do_login = function(req, res, next){
    var name = req.body.name;
    var password = req.body.psw;
    User_model.check_login(name,password,function(err,data){
        if(data.length>0){
            console.log('ok');
        }
    });
}