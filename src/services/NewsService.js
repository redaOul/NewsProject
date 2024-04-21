import axios from 'axios';

const apiKey = 'Your_Public_Key'; // Replace this with your actual API key

const NewsService = {
  fetchNews: async (searchTerm) => {
    // Fetch news based on search term
  },
  fetchNewestNews: async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
      );
      return response.data.articles; // API response has an array
    } catch (error) {
      console.error('Error fetching newest news:', error);
      return []; // Return empty array in there is an error
    }
  },
};

export default NewsService;
