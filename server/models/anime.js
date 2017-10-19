const mongoose = require('mongoose')
const _ = require('lodash')

let AnimeSchema = new mongoose.Schema({})

AnimeSchema.methods.toJSON = function () { // todo override
  let anime = this
  let animeObject = anime.toObject()

  return _.pick(animeObject, ['_id', 'h', 'c', 'im', 't'])
}

let Anime = mongoose.model('animes', AnimeSchema)

module.exports = {Anime}