# nodejs expressjs

```js
'use strict';

// Hierarchical node.js configuration with command-line arguments, environment
// variables, and files.
const nconf = (module.exports = require('nconf'));
const path = require('path');

nconf
  // 1. Command-line arguments
  .argv()
  // 2. Environment variables
  .env([
    'CLOUD_BUCKET',
    'NODE_ENV',
    'OAUTH2_CLIENT_ID',
    'OAUTH2_CLIENT_SECRET',
    'OAUTH2_CALLBACK',
    'PORT',
    'SECRET',
    'REDISHOST',
    'HRMSMYSQL_USER',
    'HRMSMYSQL_PASSWORD',
    'STAFMYSQL_USER',
    'STAFMYSQL_PASSWORD',

  ])
  // 3. Config file
  .file({file: path.join(__dirname, 'config.json')})
  // 4. Defaults
  .defaults({
    // Typically you will create a bucket with the same name as your project ID.
    PORT: 8089,
    // Set this a secret string of your choosing
    SECRET: 'keyboardcat',
    REDISHOST:'127.0.0.1',
    STUDMYSQL_HOST:'192.168.101.250',
    STUDMYSQL_DB:'',
    STUDMYSQL_USER:'',
    STUDMYSQL_PASSWORD:'',
    STAFMYSQL_HOST:'192.168.115.114',
    STAFMYSQL_USER:'joehong',
    STAFMYSQL_PASSWORD:'joehong',    
  });
// Check for required settings
// checkConfig('CLOUD_BUCKET');

function checkConfig(setting) {
  if (!nconf.get(setting)) {
    throw new Error(
      `You must set ${setting} as an environment variable or in config.json!`
    );
  }
}


```