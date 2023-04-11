import React from "react";
import "./BlogCard.css";
function BlogCard() {
  return (
    <div className="blog-card">
      <div className="blog-img">
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          alt="this is an image"
        />
      </div>
      <div className="blog-details">
        <h2>Blog 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
          sit! Id debitis totam voluptate nulla
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
