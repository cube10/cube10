'use strict'
module.exports = (router) => {
  const User = require(__dirname + '/../models/user_module')
  const basicHTTP = require(__dirname + '/../lib/basic_http')

  router
    .post('/signup', (req, res) => {
      var newUser = new User()
      console.log('SIGN UP HAS BEEN HIT WITH : ', req.body.username)
      newUser.username = req.body.username || req.body.email
      newUser.email = req.body.email
      newUser.password = req.body.password
      newUser.save((err, data) => {
        console.log('ERROR WHILE SAVING USER ', err)
        var token = data.generateToken()
        res.status(200).json({token: token})
      })
    })
    .get('/signin', basicHTTP, (req, res) => {
      console.log('BASIC SENT BACK USERNAME ', req.basicHTTP.username)
      User.findOne({username: req.basicHTTP.username}, (err, user) => {
        console.log('SEARCHING FOR USERNAME !!!')
        if (err) {
          return res.status(401).json({msg: 'authenticat seyuzzz no!'})
        }
        if (!user) return res.status(401).json({msg: 'no seyzzz the authenticat'})
        var valid = user.compareHash(req.basicHTTP.password, user.password)
        if (!valid) {
          return res.status(401).json({msg: 'Auth failure'})
        }
        res.json({token: user.generateToken()})
      })
    })
}
