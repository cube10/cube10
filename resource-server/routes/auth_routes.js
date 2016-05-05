const express = require('express');
const User = require(__dirname + '/../models/user_module');
const jsonParser = require('body-parser').json();
// const handleDBError = require(__dirname + '/../lib/handle_db_error');
const basicHTTP = require(__dirname + '/../lib/basic_http');

var authRouter = module.exports = exports = express.Router();

authRouter.post('/signup', jsonParser, (req, res) => {
  var newUser = new User();
  console.log('SIGN UP HAS BEEN HIT WITH : ', req.body.username);
  // if (!((req.body.email || '').length && (req.body.password || '').length > 7)) {
  //   return res.status(400).json({msg: 'invalid username or password'});
  // }
  newUser.username = req.body.username || req.body.email;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.save((err, data) => {
    console.log('ERROR WHILE SAVING USER ', err);

    var token = data.generateToken();

    res.status(200).json({token: token});

  });
})


authRouter.get('/signin', basicHTTP, (req, res) => {
  console.log('BASIC SENT BACK USERNAME ', req.basicHTTP.username);
  User.findOne({username: req.basicHTTP.username}, (err, user) => {
    console.log('SEARCHING FOR USERNAME !!!');
    if (err) {
      return res.status(401).json({msg: 'authenticat seyuzzz no!'});
    }

    if (!user) return res.status(401).json({msg: 'no seyzzz the authenticat'});

    var valid = user.compareHash(req.basicHTTP.password, user.password)
    if (!valid) {
      return res.status(401).json({msg: 'Auth failure'})
    }

    // if (!user.comparePassword(req.basicHTTP.password)) return res.status(401).json({msg: 'authenticat seyzzz no!'});
    res.json({token: user.generateToken()});

  });
});
