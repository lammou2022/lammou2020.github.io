# nodejs expressjs

```text
config.js
app.js
package.json
bookshelf\

    views\

      lib\

```

```js
'use strict';

const nconf = (module.exports = require('nconf'));
const path = require('path');

nconf
  // 1. Command-line arguments
  .argv()
  // 2. Environment variables
  .env([
    'PORT',
    'SECRET',
    'REDISHOST',
    'MYSQL_USER',
    'MYSQL_PASSWORD',

  ])
  // 3. Config file
  .file({file: path.join(__dirname, 'config.json')})
  // 4. Defaults
  .defaults({
    // Typically you will create a bucket with the same name as your project ID.
    PORT: 8089,
    // Set this a secret string of your choosing
    SECRET: 'cat',
    REDISHOST:'127.0.0.1',
    MYSQL_HOST:'127.0.0.1',
    MYSQL_DB:'',
    MYSQL_USER:'',
    MYSQL_PASSWORD:'',
  });
// Check for required settings

function checkConfig(setting) {
  if (!nconf.get(setting)) {
    throw new Error(
      `You must set ${setting} as an environment variable or in config.json!`
    );
  }
}
```

app.js

```js
'use strict';

const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
//var RedisStore = require('connect-redis')(session);

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const config = require('./config');

const app = express();

app.disable('etag');
app.use(require('morgan')('combined'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('trust proxy', true);

// [START session]
// Configure the session and session storage.
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));//default false

app.use(session({  
    resave: false,
    saveUninitialized: false,
    secret: config.get('SECRET'),
    signed: true,
    //store: new RedisStore({host:config.get('REDISHOST')}),
}));

// [END session]

// OAuth2
app.use(passport.initialize());
app.use(passport.session())
app.use(require('./lib/oauth2').router);

//public static
app.use(express.static(path.join(__dirname, 'public')));

// Books
app.use('/books', require('./books/crud'));
app.use('/api/books', require('./books/api'));

// Redirect root to /books
app.get('/', (req, res) => {
  //res.redirect('/books');
  res.render('index.pug', {
    profile:req.user,
    login : `/auth/login?return=${encodeURIComponent(req.originalUrl)}`,
    logout : `/auth/logout?return=${encodeURIComponent(req.originalUrl)}`
  });
});

app.get('/auth/login',    function (req, res) {
  //console.log(req.query.return);
  res.render('login',{redirect:req.query.return});
});

// Basic 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Basic error handler
app.use((err, req, res) => {
  /* jshint unused:false */
  console.error(err);
  // If our routes specified a specific response, then send that. Otherwise,
  // send a generic message so as not to leak anything.
  res.status(500).send(err.response || 'Something broke!');
});

const server = app.listen(config.get('PORT'), () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
});
```

bookshelf/api.js

```js
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const model = require('./model-mysql');

const router = express.Router();

// Automatically parse request body as JSON
router.use(bodyParser.json());

/**
 * GET /api/books
 *
 * Retrieve a page of books (up to ten at a time).
 */
router.get('/', (req, res, next) => {
  model.listMore(10, req.query.pageToken, (err, entities, cursor) => {
    if (err) {
      next(err);
      return;
    }
    res.json({
      items: entities,
      nextPageToken: cursor,
    });
  });
});

/**
 * POST /api/books
 *
 * Create a new book.
 */
router.post('/', (req, res, next) => {
  model.create(req.body, (err, entity) => {
    if (err) {
      next(err);
      return;
    }
    res.json(entity);
  });
});

/**
 * GET /api/books/:id
 *
 * Retrieve a book.
 */
router.get('/:book', (req, res, next) => {
  model.read(req.params.book, (err, entity) => {
    if (err) {
      next(err);
      return;
    }
    res.json(entity);
  });
});

/**
 * PUT /api/books/:id
 *
 * Update a book.
 */
router.put('/:book', (req, res, next) => {
  model.update(req.params.book, req.body, (err, entity) => {
    if (err) {
      next(err);
      return;
    }
    res.json(entity);
  });
});

/**
 * DELETE /api/books/:id
 *
 * Delete a book.
 */
router.delete('/:book', (req, res, next) => {
  model.delete(req.params.book, err => {
    if (err) {
      next(err);
      return;
    }
    res.status(200).send('OK');
  });
});

/**
 * Errors on "/api/books/*" routes.
 */
router.use((err, req, res, next) => {
  // Format error and forward to generic error handler for logging and
  // responding to the request
  err.response = {
    message: err.message,
    internalCode: err.code,
  };
  next(err);
});

module.exports = router;
```

bookshelf/crud.js

```js


```

bookshelf/model-mysql.js

```js
'use strict';

const mysql = require('mysql');
const config = require('../config');
const options = {
    host: config.get('CLOUDSQL_HOST'),
    user: config.get('CLOUDSQL_USER'),
    password: config.get('CLOUDSQL_PASSWORD'),
    database: config.get('CLOUDSQL_DATABASE'),
};

const pool = mysql.createPool(options);

function list( userId , cb) {
    pool.getConnection(function (err, connection) {
        if(err){cb(err);return;}
        // Use the connection
        connection.query(
            'SELECT * FROM `bookshelf` order by id DESC ',[],
            (err, results) => {
                if (err) {
                    cb(err);
                    return;
                }
                cb(null, results);
                connection.release();
            }
        );
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
    pool.getConnection(function (err, connection) {
        if(err){cb(err);return;}
        connection.query('INSERT INTO `bookshelf` SET ? ', [data], (err, res) => {
            if (err) {
                cb(err);
                return;
            }
            read( res.insertId, cb);
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
            'UPDATE `bookshelf` SET ? WHERE `id` = ?  ', [data, id], (err) => {  
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
```

bookshelf/model-sqlite.js

```js


```

bookshelf/model-redis.js

```js


```

bookshelf/images.js

```js
'use strict';
const mrs_base_dir = process.cwd()+"/temp/";
function sendUploadToGCS(req, res, next) {  return next();}
const Multer = require('multer');
var storage = Multer.diskStorage({
    destination: mrs_base_dir,
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + "." + fileFormat[fileFormat.length - 1]);
    }
});
const multer = Multer({
    storage: storage,
    limits: {fileSize: 15 * 1024 * 1024   }// no larger than 15mb
});
module.exports = {
    multer
};


```