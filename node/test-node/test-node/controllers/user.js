var User_model = require('../models/user_model')

exports.index=function(req,res,next){
    res.render("index.ejs",{title:'xxx'})
};
exports.reg=function(req,res,next){
    res.render("reg.ejs")
};
exports.do_reg=function(req,res,next){
    var name=req.body.uname;
    var pass=req.body.psw;
    User_model.insert_data=function(){

    };
};
exports.login=function(req,res,next){

}
