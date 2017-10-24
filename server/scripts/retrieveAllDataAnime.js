const request = require('request').defaults({family: 4})
const http = require('http')
const syncRequest = require('sync-request')
require('./../config/config')
const {mongoose} = require('./../db/mongoose')
const {Anime} = require('./../models/anime')

const API_URL = 'http://www.mangaeden.com/api/manga/'

Anime.find({}).then((animes) => {
/*
    animes.forEach((anime) => {

    })
*/
    (async function loop() {
      for (anime of animes) {
        await new Promise((resolve) => {
          request({
            uri: `http://www.mangaeden.com/api/manga/${anime.i}`,
            json: true,
            method: 'GET',
            agent: false
          }, (err, res, body) => {
            if (err) {
              return console.log(err);
            }
            console.log(res.body)
            Anime.update({_id: anime._id}, {
              description: body.description,
              artist: body.artist,
              author: body.author,
              chapters_len: body.chapters_len,
              released: body.released
            }).then((err) => {
              resolve()
              console.log(err)
            })
          })
        });
      }
    })();

    //REQUEST MODULE
    /*request({
              uri: `http://www.mangaeden.com/api/manga/${anime.i}`,
              json: true,
              method: 'GET',
              agent: false
            }, (err, res, body) => {
              if (err) {
                return console.log(err);
              }
              console.log(res.body)
              Anime.update({_id: anime._id}, {
                description: body.description,
                artist: body.artist,
                author: body.author,
                chapters_len: body.chapters_len,
                released: body.released
              }).then((err) => {
                console.log(err)
              })
            })*/

    // HTTP MODULE
    /*
        http.get({
          host: `www.mangaeden.com`,
          path: `/api/manga/${animes[0].i}`,
          followAllRedirects: true,
          headers: {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'}
        }, (response) => {
          let body = '';
          response.on('data', function (d) {
            body += d;
          });
          response.on('end', function () {

            // Data reception is done, do whatever with it!
           console.log(body)
          })
        })
    */
  }
)

