import React, { useEffect, useState } from "react";
import BlogCard from "./blogcard/BlogCard";
import axios from "axios";
import "./Blog.css";
import { Link } from "react-router-dom";

function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const options = {
    method: "GET",
    // url: "http://localhost:3000/api/v1/blogs/", // localhost
    // url: "https://blog-xh2n.onrender.com/api/v1/blogs", // render server
    url: "https://mushy-calf-nightgown.cyclic.app/api/v1/blogs/", // cyclic server
  };
  const getData = async () => {
    const { data } = await axios.request(options);
    setBlogData(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="heading">
        <h2>Welcome to my blog</h2>
        <h3>Some recent posts</h3>
      </div>
      <div className="blog-container">
        {blogData.map((blog) => (
          <Link to={"/blogs/" + blog._id} key={blog._id}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Blogs;
