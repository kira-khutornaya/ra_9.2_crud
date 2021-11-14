import React from 'react';
import { useNavigate } from 'react-router-dom';
import Posts from './Posts';

export default function Main() {
  const navigate = useNavigate();
  const onAdd = () => navigate('/posts/new');

  return (
    <main className="Main">
      <section className="Main-create__container">
        <button
          className="Main-create__button button"
          type="button"
          onClick={onAdd}
        >
          Создать пост
        </button>
      </section>

      <Posts />
    </main>
  );
}
