/* eslint react/prop-types: 0 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useJsonFetch from '../hooks/useJsonFetch';
import Post from './Post';
import Form from './Form';

function PostPage({ match }) {
  const [isEdit, setEdit] = useState(false);
  const [data] = useJsonFetch(`${process.env.REACT_APP_DATA_URL}`);

  const navigate = useNavigate();
  const onClose = () => navigate('/');

  const onEdit = () => setEdit(true);
  const findPost = () => data.find((el) => el.id === +(match.params.id));

  const onDelete = () => {
    fetch(`${process.env.REACT_APP_DATA_URL}/${match.params.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => navigate('/'));
  };

  const onSubmit = (content) => {
    fetch(process.env.REACT_APP_DATA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: +(match.params.id),
        content,
      }),
    });
  };

  return (
    <div className="PostPage">
      { data && !isEdit && (
        <>
          <Post post={findPost()} />

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
        </>
      ) }

      { data && isEdit && (
        <>
          <Form
            post={findPost()}
            onSubmit={onSubmit}
            onClose={onClose}
          />
        </>
      ) }
    </div>
  );
}

export default PostPage;
