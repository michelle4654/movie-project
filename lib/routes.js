'use strict';

const Path = require('path');
const sqlite3 = require('sqlite3').verbose();
const dbPath = Path.basename('../../database2.sqlite');
module.exports = [
  {
    method: 'GET',
    path: '/watchthis',
    handler: function (request, reply) {
    const db = new sqlite3.Database(dbPath);
    let sql = `SELECT Title title, Image image, Description description FROM movies ORDER BY RANDOM () LIMIT 1`;
    db.get(sql,[], (err, row) => {
        if (err) {
          console.error(err.message);
        }
        console.log(row.title);
        // These code snippets use an open-source library. http://unirest.io/nodejs
        unirest.get("https://utelly-tv-shows-and-movies-availability-v1.p.mashape.com/lookup?country=uk&term=bojack")
        .header("X-Mashape-Key", "7Gf2wvMfxemsh4hqFOpstTv3FUr3p1Ju7r7jsnGnOsJyM8zYdH")
        .header("Accept", "application/json")
        .end(function (result) {
        console.log(result.status, result.headers, result.body);
        });
        reply.view('index', {
            title:row.title,
            image:row.image,
            description:row.description
        });
      })
  
    console.log(db);
    //reply('Hello!'+title);
    
    },
    config: {
      description: 'Gets all the movies available'
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: function (request,reply) {
      reply.view('home');
    },
    config: {
      description: 'Gets all the notes available'
    }
  }
  //{
    // Static files
    //method: 'GET',
    //path: '/{param*}',
    //handler: {
      //directory: {
       // path: Path.join(__dirname, '../static/public')
     // }
    //},
    //config: {
     // description: 'Provides static resources'
    //}
  //}
];
