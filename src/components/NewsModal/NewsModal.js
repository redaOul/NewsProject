import React from 'react';
import { Modal } from 'antd';

const NewsModal = ({ visible, onClose, newsDetails }) => {
  return (
    <Modal
      title={newsDetails.title}
      visible={visible}
      onCancel={onClose}
      footer={null} >
      <p>{newsDetails.date}</p>
      <p>{newsDetails.content}</p>
    </Modal>
  );
};

export default NewsModal;
