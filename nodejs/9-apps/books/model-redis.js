'use strict';

const config = require('../config');
var reids=require("redis");
var client=reids.createClient();
const R_KEY="bookshelf"

function list( userId , cb) {
    console.log("LIST");
    client.hgetall(R_KEY,function(err,result){
        if(err) cb(new Error('List ERROR'));
        console.log(result);
        return cb(null,result);
    });
}

function listMore( limit,  token, cb) {
    token = token ? parseInt(token, 10) : 0;
    pool.getConnection(function (err, connection) {
        if(err){cb(err);return;}
        connection.query(
            'SELECT *  FROM `bookshelf` order by id DESC LIMIT ? OFFSET ?', //, DAYOFWEEK(logDate)-1 dw
            [ limit, token],
            (err, results) => {
                if (err) {
                    cb(err);
                    return;
                }
                const hasMore = results.length === limit ? token + results.length : false;
                cb(null, results, hasMore);
                connection.release();
            });
    });
}
function listBy(id, limit, token, cb) {
    token = token ? parseInt(token, 10) : 0;
    pool.getConnection(function (err, connection) {
        if(err){cb(err);return;}
        connection.query(
            'SELECT * FROM `bookshelf` where createdById = ? order by id desc  LIMIT ? OFFSET ?',
            [ id,limit, token],
            (err, results) => {
                if (err) {
                    cb(err);
                    return;
                }
                const hasMore = results.length === limit ? token + results.length : false;
                cb(null, results, hasMore);
                connection.release();

            });
    });
}


function create( data, cb) {
    //console.log(data);
    
    pool.getConnection(function (err, connection) {
        if(err){cb(err);return;}
        connection.query('INSERT INTO `bookshelf` SET ? ', [data], (err, res) => {
            if (err) {
                cb(err);
                return;
            }
            read( res.insertId, cb);
            //read(res.insertId, cb);
            //cb(null);
            connection.release();
        });
    });
}

function read( id, cb) {
    pool.getConnection(function (err, connection) {
        if(err){cb(err);return;}
        connection.query(
            'SELECT * FROM `bookshelf` WHERE `id` = ? ', id, (err, results) => {
                if (!err && !results.length) {
                    err = {
                        code: 404,
                        message: 'Not found'
                    };
                }
                if (err) {
                    cb(err);
                    return;
                }
                cb(null, results[0]);
                connection.release();
            });
    });
}

function update( id, data, cb) {
    pool.getConnection(function (err, connection) {
        if(err){cb(err);return;}
        connection.query(
            'UPDATE `bookshelf` SET ? WHERE `id` = ?  ', [data, id], (err) => {   //and `createdById` = ?
                if (err) {
                    cb(err);
                    return;
                }
                read( id, cb);
                connection.release();
            });
    });
}

function _delete(userid, id ,cb) {
    pool.getConnection(function (err, connection) {
        if(err){cb(err);return;}
        connection.query('DELETE FROM `bookshelf` WHERE createdById=?  and `id` = ? ',[ userid,id ],  cb);
        connection.release();
    });
}

module.exports = {
    
    list: list,
	listBy: listBy,
    listMore: listMore,
    create: create,
    read: read,    
    update: update,
    delete: _delete
};
/*
CREATE TABLE IF NOT EXISTS `bookshelf`.`books` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `author` VARCHAR(255) NULL,
    `publishedDate` VARCHAR(255) NULL,
    `imageUrl` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `createdBy` VARCHAR(255) NULL,
    `createdById` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));
  */




 

function list( userId , cb) {
    console.log("LIST");
    client.hgetall("TMS",function(err,result){
        if(err) cb(new Error('TMS List ERROR'));
        console.log(result);
        return cb(null,result);
    });
}


function TMSQFlistbydate(sd,ed,cb) {
    client.hgetall("TMS",function(err,result){
        if(err) cb(new Error('TMS List ERROR'));
        console.log(result);
        return cb(null,result);
    });
 }

 function AddTMSQF(fn,md,jsondata,username,cb){
    let data={id:0,fn:fn,md:md,jsondata:jsondata,username:username};
    console.log(data);
    client.hset("TMS",fn,jsondata,function(err,result){
        if(err) cb(new Error('TMS ADD ERROR'));
        console.log(result);//return 1;
        return cb(null,result);
    });
}
function SaveDateTime(data,cb){
    client.hset(CloudTMS,CloudTMSStartDateTime,data,function(err,result){
        if(err) cb(new Error('ADD ERROR'));
        return cb(null,result);//result 1;
    });
}

function ReadDateTime( cb) {
    client.hget(CloudTMS,CloudTMSStartDateTime,function(err,result){
        if(err){  //cb(new Error('TMS ' + id + ' does not exist'));
            return cb(null,-1);    
        } 
        //let user=JSON.parse(result);
        return cb(null,result);
    });
}

module.exports = {
    SaveDateTime:SaveDateTime,  
    ReadDateTime:ReadDateTime,
};      

/*

*/
