const _ = require('lodash')

require('./../config/config')
const {mongoose} = require('./../db/mongoose')
const {Anime} = require('./../models/anime')
Anime.find({
  c: {
    $in: [
      "Adventure",
      "Horror",
      "Shounen",
      "Supernatural"
    ]
  }
}).sort({h: 'desc'}).then((animes) => {
  let arr = ["Adventure", "Horror", "Shounen", "Supernatural"]
  for (let anime of animes) {
    anime.c_common = _.intersection(anime.c, arr)
  }
  animes = _.orderBy(animes, [(o) => {
    return o.c_common.length
  }], ["desc"])
  animes = animes.slice(0,9)
  animes = _.orderBy(animes, ['h'], ['desc'])
})
