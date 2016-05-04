const express = require('express');
const User = require(__dirname + '/../models/user_module');
const jsonParser = require('body-parser').json();
// const handleDBError = require(__dirname + '/../lib/handle_db_error');
const basicHTTP = require(__dirname + '/../lib/basic_http');

var authRouter = module.exports = exports = express.Router();

authRouter.post('/signup', jsonParser, (req, res) => {
  var newUser = new User();
  console.log('REQUET BODY AUTH ROUTE : ', req.body);
  // if (!((req.body.email || '').length && (req.body.password || '').length > 7)) {
  //   return res.status(400).json({msg: 'invalid username or password'});
  // }
  newUser.username = req.body.username || req.body.email;
  // newUser.authentication.email = req.body.email;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  // newUser.hashPassword(req.body.password);
  newUser.save((err, data) => {
    console.log('ERROR from auth route : ', err);
    // if (err) return handleDBError(err, res);

    var token = data.generateToken();
    console.log('AUTH ROUTE : TOKE: ', token);
    // if (err) {
    //   res.status(500).json({msg: 'server error'})
    // }
    res.status(200).json({token: token});
    // res.status(200)
    // res.status(200).json(token);
    // res.json({token: token})
  });
})


authRouter.get('/signin', basicHTTP, (req, res) => {
  User.findOne({'authentication.email': req.basicHTTP.email}, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(401).json({msg: 'authenticat seyuzzz no!'});
    }

    if (!user) return res.status(401).json({msg: 'no seyzzz the authenticat'});

    if (!user.comparePassword(req.basicHTTP.password)) return res.status(401).json({msg: 'authenticat seyzzz no!'});

    res.json({token: user.generateToken()});
  });
});
