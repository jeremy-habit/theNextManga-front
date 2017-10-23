const mongoose = require('mongoose')
const _ = require('lodash')

let AnimeSchema = new mongoose.Schema({
  i: String,
  h: Number,
  c: Array,
  im: String,
  t: String,
  description: String,
  artist: String,
  author: String,
  chapters_len: Number,
  released: Number


})

AnimeSchema.methods.toJSON = function () { // todo override
  let anime = this
  let animeObject = anime.toObject()

  return _.pick(animeObject, ['_id', 'h', 'c', 'im', 't', 'i'])
}


let Anime = mongoose.model('animes', AnimeSchema)

module.exports = {Anime}