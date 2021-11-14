import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useJsonFetch from '../hooks/useJsonFetch';
import Post from './Post';
import Form from './Form';

export default function PostPage() {
  const [isEdit, setEdit] = useState(false);
  const [data] = useJsonFetch(`${process.env.REACT_APP_DATA_URL}`);
  const { id } = useParams();

  const navigate = useNavigate();
  const onClose = () => navigate('/');

  const onEdit = () => setEdit(true);
  const findPost = () => data.find((el) => el.id === +(id));

  const onDelete = () => {
    fetch(`${process.env.REACT_APP_DATA_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => onClose());
  };

  const onSubmit = (content) => {
    fetch(process.env.REACT_APP_DATA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: +id,
        content,
      }),
    })
      .then(() => onClose());
  };

  return (
    <div className="PostPage">
      { data && !isEdit && (
        <>
          <Post post={findPost()} />

          <div className="PostPage__control">
            <button
              className="PostPage__button_edit button"
              type="submit"
              onClick={onEdit}
            >
              Изменить
            </button>
            <button
              className="PostPage__button_delete button"
              type="submit"
              onClick={onDelete}
            >
              Удалить
            </button>
          </div>
        </>
      ) }

      { data && isEdit && (
        <div className="PostPage__edit">
          <Form
            post={findPost()}
            onSubmit={onSubmit}
            onClose={onClose}
          />
        </div>
      ) }
    </div>
  );
}
