'use strict'
let mongoose = require('mongoose')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

let userSchema = mongoose.Schema({
  // username: {type : String, unique : true, required : true},
  username: {type : String, unique : true, required : true, dropDups: true},
  name: String,
  email: String,
  password: {type: String, required: true},
  topTen: [String],
  followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  following: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
})

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
  console.log('hash password NEWWWW : ', this.password);
  next()
})

userSchema.methods.generateToken = function() {
  return jwt.sign({_id: this._id}, process.env.SECRET || 'secrets')
}

userSchema.methods.compareHash = function(pass, hash) {
  return bcrypt.compareSync(pass, hash)
}

let User = mongoose.model('User', userSchema)

module.exports = User

// test users
// let newUser = new User({username: 'test1', name: 'test1', password: 'test1'})
// newUser.save()
//
// let newUser2 = new User({username: 'test2', name: 'test2', password: 'test2'})
// newUser2.save()
