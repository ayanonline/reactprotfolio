import React, { useEffect, useState } from "react";
import BlogCard from "./blogcard/BlogCard";
import axios from "axios";
function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const options = {
    method: "GET",
    url: "http://localhost:4000/api/v1/blogs/",
  };
  const getData = async () => {
    const { data } = await axios.request(options);
    setBlogData(data.data);
  };

  useEffect(() => {
    getData();
  }, [blogData]);

  return (
    <div>
      <h1>Blogs</h1>
      {blogData.map((blog, index) => (
        <BlogCard blog={blog} key={index} />
      ))}
    </div>
  );
}

export default Blogs;
