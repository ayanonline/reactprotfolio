import React from "react";
import "./BlogCard.css";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${blog.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="thumbinfo">
          <img
            src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
            alt="this is image"
          />
          <div className="innerInfo">
            <h3>{blog.author}</h3>
            <span>{blog.createdAt.slice(0, 10)}</span>
          </div>
        </div>
      </div>

      <div className="datails">
        <h2>
          {blog.title.length < 16
            ? blog.title
            : blog.title.slice(0, 12) + "..."}
        </h2>
        <p>{blog.content.slice(0, 150) + "..."}</p>
        <button className="btn">Read more</button>
      </div>
    </div>
  );
}

export default BlogCard;
