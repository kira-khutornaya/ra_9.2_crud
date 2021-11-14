import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import LoaderCentered from './LoaderCentered';
import Error from './Error';
import Post from './Post';

function Posts() {
  const [data, isLoading, error] = useJsonFetch(`${process.env.REACT_APP_DATA_URL}`);

  return (
    <section className="Posts">
      { isLoading && <LoaderCentered /> }
      { error && <Error /> }
      { !isLoading && data && data.map((el) => (
        <Post post={el} key={el.id} />
      )) }
    </section>
  );
}

export default Posts;
