'use strict'
let authenticate = require('../lib/authenticate')

// TODO: move authenticate and projectLookup to .all() to cleanup routes
module.exports = (router) => {
  router.route('/stories')
    //.get(authenticate)
    .get((req, res, next) => {
      console.log('/projects hit with get request')
      next()
    })
    .get((req, res) => {
      require('../models/story_module')
        .find({})
        .limit(10)
        .then((stories) => {
          res.json(stories)
        })
    })
}
