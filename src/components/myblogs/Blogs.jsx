import React, { useEffect, useState } from "react";
import BlogCard from "./blogcard/BlogCard";
import axios from "axios";
import "./Blog.css";
function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const options = {
    method: "GET",
    url: "http://localhost:3000/api/v1/blogs/",
    // url: "https://blog-xh2n.onrender.com/api/v1/blogs",
  };
  const getData = async () => {
    const { data } = await axios.request(options);
    setBlogData(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="blog-container">
      {blogData.map((blog, index) => (
        <BlogCard blog={blog} key={index} />
      ))}
    </div>
  );
}

export default Blogs;
