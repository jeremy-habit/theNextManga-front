require('./config/config')
const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const {ObjectId} = require('mongodb')

const {mongoose} = require('./db/mongoose')
const {Anime} = require('./models/anime')

let app = express()
const port = process.env.PORT

app.use(bodyParser.json()) // set bodyParser middleware

app.get('/animes/name/:query', (req, res) => {
  Anime.find({t: new RegExp(req.params.query, 'i')}).then((anime) => {
    res.send({anime})
  }).catch((e) => {
    console.log(e)
  })
})

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id).then((anime) => {
    res.send({anime})
  }).catch((e) => {
    console.log(e)
  })
})

app.get('/animes/suggestion/:id', (req, res) => {
  Anime.findById(req.params.id).then((AnimeSearched) => {
    Anime.find({
      c: {
        $in: AnimeSearched.c
      }
    }).sort({h: 'desc'}).then((animes) => {
      for (let anime of animes) {
        anime.c_common = _.intersection(anime.c, AnimeSearched.c)
      }
      animes = _.orderBy(animes, [(o) => {
        return o.c_common.length
      }], ["desc"])
      animes = animes.slice(0,9)
      animes = _.orderBy(animes, ['h'], ['desc'])
      res.send({animes})
    })

  }).catch((e) => {
    console.log(e)
  })

})


app.listen(port, () => {
  console.log(`Starting on ${port}`)
})


