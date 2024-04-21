import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import NewsCard from './components/NewsCard/NewsCard';
import NewsModal from './components/NewsModal/NewsModal';
import NewsService from './services/NewsService';

const App = () => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchNewestNews = async () => {
      try {
        const newsData = await NewsService.fetchNewestNews();
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching newest news:', error);
      }
    };

    fetchNewestNews();
  }, []);

  const handleSearch = async (searchTerm) => {
    const newsData = await NewsService.fetchNews(searchTerm);
    setNews(newsData);
  };

  const handleCardClick = (news) => {
    setSelectedNews(news);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {news.map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            date={article.publishedAt}
            contentPreview={article.description}
            onClick={() => handleCardClick(article)}
          />
        ))}
      </div>
      {selectedNews && (
        <NewsModal
          visible={modalVisible}
          onClose={closeModal}
          newsDetails={selectedNews}
        />
      )}
    </div>
  );
};

export default App;
