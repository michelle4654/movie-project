'use strict';
const sqlite3 = require('sqlite3').verbose();
const Path = require('path');
const Models = require('../models/');
const dbPath = Path.basename('../../database2.sqlite');
const db = new sqlite3.Database(dbPath);
console.log(db)
module.exports =  {
  db : db
};
  
    
