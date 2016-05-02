'use strict'
let Story = require('../models/story_module')

function addStory(storyObj) {
  let newStory = new Story(storyObj)
  newStory.save()
    .then((archive) => {
      // console.log(archive.title)
    })
}

function activateScrapers() {
  console.log('gonna add new stories')
  require('./scrapers/reddit.js')(addStory)
  require('./scrapers/mock.js')(addStory)
}

function deleteAllStories() {
  console.log('Purging stories')
  Story.remove({}, () => {
    console.log('Purged!')
    activateScrapers()
  })
}

function startScrapers() {
  deleteAllStories()
}

startScrapers()
