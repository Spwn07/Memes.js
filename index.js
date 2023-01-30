const axios = require("axios");
const API_URL = "https://www.reddit.com/r/memes/random.json";

async function getMeme() {
  try {
    const response = await axios.get(API_URL);
    const post = response.data[0].data.children[0].data;

    return {
      title: post.title,
      image: post.url,
      upvote: post.ups,
      subreddit: post.subreddit
    };
  } catch (error) {
    console.error("Error retrieving meme:", error.message);
    return { error: error.message };
  }
}

module.exports = getMeme;
