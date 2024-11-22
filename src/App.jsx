import './App.scss';
import { useState, useEffect } from 'react';
import postData from '/src/data/postData.json';
import { sortPosts } from '/src/utils/sortPosts';
import InputForm from './components/InputForm/InputForm';

function App() {
  const [posts, setPosts] = useState(postData);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    const test = sortPosts("I've been stressed and want to relax", posts);
    setPosts(test);
  }, []);

  return (
    <>
      <main className="main">
        <section className="input-form__section">
          <InputForm setTooltipVisible={setTooltipVisible} />
        </section>
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
        {tooltipVisible && <div className="overlay" />}
      </main>
    </>
  );
}

export default App;
