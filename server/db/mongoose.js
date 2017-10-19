const mongoose = require('mongoose')

mongoose.Promise = global.Promise // set up mangoose to use javascript vanilla promise

mongoose.connect(process.env.MONGODB_URI)

module.exports = {
  mongoose
}
