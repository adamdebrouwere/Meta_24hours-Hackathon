import React from "react";
import "./Posts.scss";

function Posts({ posts }) {
  return (
    <div className="post">
      {posts.map((post, index) => (
        <div className="post__card" key={index}>
          <div className="post__user">
            <div className="post__user-icon"></div>
          </div>

          <div>
            <h4 className="post__author">
              By {post.author} on {post.date}
            </h4>

            <div className="post__image">
              <img
                src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg"
                alt={post.title}
              />
              {/* <img src={post.image || "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg"} alt={post.title} /> */}
            </div>
            <div className="post__content">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
