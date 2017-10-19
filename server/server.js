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

app.get('/animes/:query', (req, res) => {
  Anime.find({t: new RegExp(req.params.query, 'i')}).then((anime) => {
    res.send({anime})
  }).catch((e) => {
    console.log(e)
  })
})

app.listen(port, () => {
  console.log(`Starting on ${port}`)
})


