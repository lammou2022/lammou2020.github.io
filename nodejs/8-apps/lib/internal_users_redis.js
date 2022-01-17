var http = require('http');
var fs = require('fs');
var redis = require("redis"),
    client = redis.createClient();
var records = [ { id: 1, username: 'admin', password: '123', displayName: 'admin', emails: [{ value: 'lammou@mail.mbc.edu.mo' }], encode_username: "", marksys_flag: 0, marksys_info:null }];
function encode_key(x) {
    var d = new Date(); var n = d.getDate();  var res = String.fromCharCode(n+64);
    if (n < 10) n = '0' + n;  var n = n + res;
    return n + new Buffer(x).toString('base64');
}
exports.findById = function (id, cb) {
    process.nextTick(function () {
        
        for (var i = 0, len = records.length; i < len; i++) {
            var record = records[i];
            if((record != null)  && (record.id === id)) { return cb(null, record); }
        }
        client.hget( "Users", id.toString(), function(err, result){
            if(err) {cb(new Error('User ' + id + ' does not exist'));}
            let user=JSON.parse(result);            
            records.push(user);   
            return cb(null, user);
        }) 
    });
}

exports.findByUsername = function (username, cb) {
    process.nextTick(function () {
        
        for (var i = 0, len = records.length; i < len; i++) {
            var record = records[i];
            if (record.username === username) {
                return cb(null, record);
            }
        }
        return cb(null, null);
    });
}
exports.updateUser=function (id,cb){
    
    client.hget( "Users", id.toString(), function(err, result){
        if(err) {cb(new Error('User ' + id + ' does not exist'));}
        let user=JSON.parse(result);            
        for (var i = 0, len = records.length; i < len; i++) {
            var record = records[i];
            if((record != null)  && (record.id === user.id)) { 
                records[i]=user; 
                return cb('User ' + id + ' update');
            }
        }            
        return cb('User ' + id + ' does not exist');
    }) 
}
exports.removeUser=function (id,cb){
    
    for (var i = 0, len = records.length; i < len; i++) {
        var record = records[i];
        if((record != null)  && (record.id === id)) { 
            records.splice(i,1); 
            return cb('User ' + id + ' remove');
        }
    }            
    return cb('User ' + id + ' does not exist');    
}
exports.findByUsernamePassword = function (username, password, cb) {
    process.nextTick(function () {
        for (var i = 0, len = records.length; i < len; i++) {
            var record = records[i];
            if (record.username === username) {
              return cb(null, record);
            }
          }
          return cb(null, null);
    });
}
