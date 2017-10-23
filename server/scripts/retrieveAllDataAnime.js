const request = require('request')

require('./../config/config')
const {mongoose} = require('./../db/mongoose')
const {Anime} = require('./../models/anime')

const API_URL = 'http://www.mangaeden.com/api/manga/'
Anime.find({}).then((animes) => {
  for (let anime of animes) {
    request({
      uri: `http://www.mangaeden.com/api/manga/${anime.i}`,
      json: true,
      method: 'GET'
    }, (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      Anime.update({_id: anime._id}, {
        description: body.description,
        artist: body.artist,
        author: body.author,
        chapters_len: body.chapters_len,
        released: body.released
      }).then((err) => {
        console.log(err)
      })
    })
  }
})

