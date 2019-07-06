var Blog_model = require('../models/blog_model.js')

exports.index=function(req,res,next){
    //查找所有文章
    Blog_model.serch_all(function(err,data){
        res.render("index_logined",{
            'blogs': data
        })
    })
}