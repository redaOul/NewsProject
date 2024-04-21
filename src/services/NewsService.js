import axios from 'axios';

const apiKey = 'fe57a831be23470a8af8f4e94b82f881'; // Replace this with your actual API key

const NewsService = {
  fetchNews: async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`
      );
      return response.data.articles; // Assuming the API response has an 'articles' array containing news data
    } catch (error) {
      console.error('Error fetching news:', error);
      return []; // Return empty array in case of error
    }
  },
};

export default NewsService;
