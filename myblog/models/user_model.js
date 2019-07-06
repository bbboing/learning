var db = require('./db.js');

exports.insert_data = function(name, pass, callback){
    var sql = 'insert into t_users(ACCOUNT,PASSWORD) values(?,?)';
    var result = db.query(sql,[name,pass],callback);
    console.log(result);
}

exports.check_login = function(name,pass, callback){
    var sql = 'select * from t_users where ACCOUNT=? and PASSWORD=?';
    db.query(sql,[name,pass],callback);
}