var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user :'root',
    password: '',
    database:''
})

exports.insert_data=function(name,pass,callback){
    var sql='insert into user * from user';
    db.query(sql,[name,pass],callback)
    pool.query(sql, function(error, results, fields){
        if(error) throw error;
        callback(error,results)
    });
}

