// twitterModel.js
const { TwitterApi } = require('twitter-api-v2');

class TwitterModel {
  constructor() {
    this.client = new TwitterApi({
      appKey: 'VyJZo21jG8DghZjwbwM22EL5d',
      appSecret: 'M1pP6036d2CA56OYy9FeUQdlE0IGFFQlh1nji46mBtI2JTAzjA',
      accessToken: '1768702383926755328-7mJd5rf7c8dErTeywnxl89xNNxvabE',
      accessSecret: 'lROBRylYcxqsMtuzxA48IudFPt4zhxENc0JKwwzYioE8i',
      bearerToken:
        'AAAAAAAAAAAAAAAAAAAAAHU7swEAAAAA3ZHMA868OiH5HOrDh2Uvk9JoE9s%3DKDpqGMWaxwTBYAN5DYMC9uTlQfqi0z0yborKPABPTcdDDFvvws',
    });

    this.rwClient = this.client.readWrite;
    this.tweetContainer = new Set();
  }

  // func to check previous tweet
  async checkPreviousContent(content) {
    if (this.tweetContainer.has(content)) {
      return true;
    }
    return false;
  }

  async tweet(text) {
    try {
      // calling func to check tweet content
      const previousTweet = await this.checkPreviousContent(text);
      if (previousTweet) {
        return "Similar tweet content already exists. Please, try new one!!!";
      }
      this.tweetContainer.add(text);
      // creating new tweet if new content is found
      const tweetResult = await this.rwClient.v2.tweet(text);
      return "Tweet Created Successfully!";
    } catch (error) {
      console.error('Error creating tweet:', error);
      throw error;
    }
  }
}

module.exports = TwitterModel;