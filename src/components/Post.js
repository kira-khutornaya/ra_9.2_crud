import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';

function Post({ post }) {
  const navigate = useNavigate();
  const onClick = () => navigate(`/posts/${post.id}`);

  return (
    <article
      className="Post"
      onClick={onClick}
      aria-hidden="true"
    >
      <div className="Post__content">
        <header className="Post__header">
          <div className="Post-creator__img" />
          <div className="Post__about">
            <div className="Post-creator__name">Иван Иванов</div>
            <span className="Post-creator__info">Основатель группы</span>
            <span className="Post__time">{moment(post.created).fromNow()}</span>
          </div>
        </header>
        <div className="Post__text">
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  );
}

Post.propTypes = {
  post: PropTypes.exact({
    id: PropTypes.number,
    content: PropTypes.string,
    created: PropTypes.number,
  }).isRequired,
};

export default Post;
