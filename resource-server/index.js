'use strict'
let S_PORT = Number(process.env.S_PORT) || require('./.config').S_PORT || 3000
let DB =  require('./.config').DB || process.env.DB
let mongoose = require('mongoose')
mongoose.connect(DB)

let express = require('express')
let app = express()

let publicRouter = express.Router()

require(__dirname + '/routes/login_route')(publicRouter)
require(__dirname + '/routes/story_route')(publicRouter)

app.use(publicRouter)

require(__dirname + '/lib/addStories.js')

app.listen(S_PORT, () => {
  console.log('App listening at port', S_PORT)
})
