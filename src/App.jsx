import './App.scss';
import fs from 'fs';
import path from 'path';
import InputForm from './components/InputForm/InputForm';
import { useState, useEffect } from 'react';

const postFilePath = './postData.json';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('postData.json')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log('postdata:', data);
      })
      .catch((error) => {
        console.error('Error fetching file:', error);
      });
  }, []);
  return (
    <div>
      <InputForm />
      <h1>Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>
              By {post.author} on {post.date}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
