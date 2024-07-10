const axios = require('axios');
const config = require('../config');

exports.getNews = async (req, res) => {
  const { category, query } = req.query;
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country: 'us',
        category: category || '',
        q: query || '',
        apiKey: config.newsAPIKey
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
