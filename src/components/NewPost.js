import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

export default function NewPost() {
  const navigate = useNavigate();
  const onClose = () => navigate('/');
  const onSubmit = (content) => {
    fetch(process.env.REACT_APP_DATA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 0,
        content,
      }),
    })
      .then(() => onClose());
  };

  return (
    <div className="NewPost__container">
      <Form onSubmit={onSubmit} onClose={onClose} />
    </div>
  );
}
