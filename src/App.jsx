import './App.scss';
import fs from 'fs';
import path from 'path';
import { useState, useEffect} from 'react';
import postData from '/src/data/postData.json';
import { sortPosts } from '/src/utils/sortPosts';

// const postFilePath = './postData.json';

function App() {
  const [posts, setPosts] = useState(postData)

  useEffect(() => {
    // fetch('postData.json').then(response => response.json()).then(data => {
    //   setPosts(data);
    //   console.log("postdata:", data)
    // }).catch(error => {
    //   console.error("Error fetching file:", error)
    // })

    setPosts(sortPosts("I want to see happy posts", posts));
    console.log(posts); // temporary testing
  }, [])

  return (
    <div>
    <h1>Posts</h1>
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <p>{post.content}</p>
          <small>By {post.author} on {post.date}</small>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;
