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
    'NODE_ENV',
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
