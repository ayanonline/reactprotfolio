import React from "react";
import { AVATAR_URL } from "../../../utils/constant";
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
          <img src={AVATAR_URL} alt="this is image" />
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
        {/* <p>{blog.content.slice(0, 150) + "..."}</p> */}
        <div
          dangerouslySetInnerHTML={{
            __html: blog.content.slice(0, 150) + "...",
          }}
        ></div>
        <button className="btn">Read more</button>
      </div>
    </div>
  );
}

export default BlogCard;
