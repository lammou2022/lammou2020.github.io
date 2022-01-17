'use strict';

'use strict';
const config = require('../config');
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database(config.get('SQLITE_PATH'))

function list(userId, cb) {
    db.serialize(function () {
        /*
        db.run('CREATE TABLE lorem (info TEXT)')
        var stmt = db.prepare('INSERT INTO lorem VALUES (?)')
        for (var i = 0; i < 10; i++) {
          stmt.run('Ipsum ' + i)
        }
        stmt.finalize()
        */
        db.all('SELECT * FROM `bookshelf` order by id DESC ', function (err, rows) {
            if (err) {
                cb(err);
                return;
            }
            cb(null, rows);
            // db.close()
        })
    })
}

function listBy(id, limit, token, cb) {
    db.serialize(function () {
        token = token ? parseInt(token, 10) : 0;
        db.all('SELECT * FROM `bookshelf` where createdById = ? order by id desc  LIMIT ? OFFSET ?',
            [id, limit, token], function (err, rows) {
                if (err) {
                    cb(err);
                    return;
                }
                const hasMore = rows.length === limit ? token + rows.length : false;
                cb(null, rows, hasMore);
                // db.close()
            })
    })
}

function listMore(limit, token, cb) {
    db.serialize(function () {
        token = token ? parseInt(token, 10) : 0;
        db.all('SELECT *  FROM `bookshelf` order by id DESC LIMIT ? OFFSET ?', [limit, token], function (err, rows) {
            if (err) {
                cb(err);
                return;
            }
            const hasMore = rows.length === limit ? token + rows.length : false;
            cb(null, rows, hasMore);
            // db.close()
        })
    })
}


function read(id, cb) {
    db.serialize(function ()  {
        db.all(
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


function _delete(userid, id, cb) {
    db.serialize(function ()  {
        db.run('DELETE FROM `bookshelf` WHERE createdById=?  and `id` = ? ', [userid, id], cb);
    });
}

function create(data, cb) {
    //console.log(data);
    db.serialize(function () {
        var stmt = db.prepare('INSERT INTO bookshelf VALUES (?)')
        for (var i = 0; i < 10; i++) {
          stmt.run('Ipsum ' + i)
        }
        db.query('INSERT INTO `bookshelf` SET ? ', [data], (err, res) => {
            if (err) {
                cb(err);
                return;
            }
            read(res.insertId, cb);
            //read(res.insertId, cb);
            //cb(null);
            connection.release();
        });
    });
}

function update(id, data, cb) {
    db.serialize(function () {
        db.run(
            'UPDATE `bookshelf` SET ? WHERE `id` = ?  ', [data, id], (err) => {   //and `createdById` = ?
                if (err) {
                    cb(err);
                    return;
                }
                read(id, cb);
                connection.release();
            });
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