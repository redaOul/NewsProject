import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const NewsCard = ({ title, date, contentPreview, onClick }) => {
  return (
    <Card
      style={{ width: 300, margin: '10px' }}
      onClick={onClick} // Handle click event here
    >
      <Meta title={title} description={date} />
      <p>{contentPreview}</p>
    </Card>
  );
};


export default NewsCard;
