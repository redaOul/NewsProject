import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import NewsCard from './components/NewsCard/NewsCard';
import NewsModal from './components/NewsModal/NewsModal';
import NewsService from './services/NewsService';

const App = () => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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
          onClick={() => handleCardClick(article)} // Pass the onClick handler here
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
