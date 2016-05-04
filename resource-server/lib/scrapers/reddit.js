'use strict';

const snoowrap = require('snoowrap');

module.exports = (addStory) => {

const r = new snoowrap({
  client_id: 'pzOoMdvhG98Vhg',
  client_secret: '8a-IYwKl05ZvxgIkMp7EBogfu5s',
  refresh_token: '37630378-7Na7ZEjI7UftYWHOiHVq3LRVXcA',
  user_agent: 'Top 10 media site' // for more information, see: https://github.com/reddit/reddit/wiki/API
});

  r.get_hot({
  limit: 10}).map((post) => {
    return addStory({
    "title": post.title,
    "description": post.selftext,
    "imgUrl": post.thumbnail
    // "authro": post.author
  })
  })
}
