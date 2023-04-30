import React from "react";
import "./BlogCard.css";
function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <div className="blog-img">
        <img src={blog.image} alt="this is an image" />
      </div>
      <div className="blog-details">
        <h2>{blog.author}</h2>
        <h2>{blog.createdAt}</h2>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogCard;
