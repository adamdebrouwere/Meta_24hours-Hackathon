import "./App.scss";
import { useState, useEffect } from "react";
import postData from "/src/data/postData.json";
import { sortPosts } from "/src/utils/sortPosts";
import Posts from "/src/components/Posts/Posts.jsx";




function App() {
  const [posts, setPosts] = useState(postData);

  useEffect(() => {


    setPosts(sortPosts("I want to see happy posts", posts));
    console.log(posts); // temporary testing
  }, []);

  return (
    <div>
      <Posts posts={posts} />
      {/* <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <p>{post.content}</p>
          <small>By {post.author} on {post.date}</small>
        </li>
      ))}
    </ul> */}
    </div>
  );
}

export default App;
