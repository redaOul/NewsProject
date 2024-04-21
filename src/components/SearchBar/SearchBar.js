import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearch(value); // This function will be passed from the parent component
  };

  return (
    <Search
      placeholder="Enter keywords"
      onSearch={handleSearch}
      enterButton
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
