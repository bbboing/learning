var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user :'root',
    password: '212121..zsm',
    database:'test_node'
})

exports.query=function(error, results, fields){
    if(error) throw error;
    pool.query(sql, function(error, results, fields){
        if(error) throw error;
        callback(error,results)
    });
}