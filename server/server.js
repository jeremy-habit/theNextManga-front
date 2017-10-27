require('./config/config')
const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const {ObjectId} = require('mongodb')
const path = require('path')

const {mongoose} = require('./db/mongoose')
const {Anime} = require('./models/anime')
const port = process.env.PORT

let app = express()
app.use('/public', express.static(path.join(__dirname + '/public')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(bodyParser.json()) // set bodyParser middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'twig');
app.set('twig options', {
  strict_variables: false
});

app.get('/', (req, res) => {
  res.render('')
})
app.get('/animes/name', (req, res) => {
  Anime.find({t: new RegExp(req.query.query, 'i')}).then((animes) => {
    console.log(animes)
    if (animes.length > 0)
      res.render('severalResults', {animes})
    else {
      res.render('empty', null)
    }
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
  Anime.findById(req.params.id).then((animeSearched) => {
    Anime.find({
      c: {
        $in: animeSearched.c
      }
    }).sort({h: 'desc'}).then((animes) => {
      for (let anime of animes) {
        anime.c_common = _.intersection(anime.c, animeSearched.c)
      }
      animes = _.orderBy(animes, [(o) => {
        return o.c_common.length
      }], ["desc"])
      animes = animes.slice(0, 9)
      res.render('d3', {animes: JSON.stringify(animes), animeSearched })
    })
  }).catch((e) => {
    console.log(e)
  })

})


app.listen(port, () => {
  console.log(`Starting on ${port}`)
})


