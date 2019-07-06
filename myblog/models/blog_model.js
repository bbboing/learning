var db = require('./db.js')

exports.search_all=function(callback){
    var sql = 'select * from t_blogs';
    db.query(sql,[],callback);
}