'use strict'
module.exports = (router) => {
  router.route('/stories')
    .get((req, res, next) => {
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
