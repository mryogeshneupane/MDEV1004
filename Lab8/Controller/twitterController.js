// twitterController.js
const TwitterModel = require("../Model/twitterModel");

class TwitterController {
  constructor() {
    this.twitterModel = new TwitterModel();
  }

  // func to create tweet
  async createTweet(text) {
    try {
      const tweetResult = await this.twitterModel.tweet(text);
      return tweetResult;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TwitterController;