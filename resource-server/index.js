'use strict'
let S_PORT = Number(process.env.S_PORT) || require('./.config').S_PORT || 3000
let DB =  require('./.config').DB || process.env.DB
let mongoose = require('mongoose')
mongoose.connect(DB)

let express = require('express')
let app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Overwrite, Destination, Content-Type, Depth, User-Agent, Translate, Range, Content-Range, Timeout, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control, Location, Lock-Token, If')
  res.header('Access-Control-Allow-Methods', 'ACL, CANCELUPLOAD, CHECKIN, CHECKOUT, COPY, DELETE, GET, HEAD, LOCK, MKCALENDAR, MKCOL, MOVE, OPTIONS, POST, PROPFIND, PROPPATCH, PUT, REPORT, SEARCH, UNCHECKOUT, UNLOCK, UPDATE, VERSION-CONTROL')
  next()
})

let publicRouter = express.Router()


require(__dirname + '/routes/login_route')(publicRouter)
require(__dirname + '/routes/story_route')(publicRouter)

app.use(publicRouter)

require(__dirname + '/lib/addStories.js')

app.listen(S_PORT, () => {
  console.log('App listening at port', S_PORT)
})
