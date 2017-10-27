const _ = require('lodash')
const fs = require('fs')

require('./../config/config')
const {mongoose} = require('./../db/mongoose')
const {Anime} = require('./../models/anime')

Anime.find({}).then((animes) => {
  fs.writeFileSync('db.json', animes)
})