import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';

export default function App() {
  return (
    <Router>
      <div className="App__container">
        <div className="App">
          <Link to="/">Ссылка на проект</Link>
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/posts/new" element={<NewPost />} />
            <Route path="/posts/:id" element={<PostPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
