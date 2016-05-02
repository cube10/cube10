'use strict'
require('./user_module')
let mongoose = require('mongoose')

let storySchema = new mongoose.Schema({
  title:  {type : String, unique : true, required : true, dropDups: true},
  description: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  tags: [String],
  imgUrl: String,
  date: String
})

module.exports = mongoose.model('Story', storySchema)
