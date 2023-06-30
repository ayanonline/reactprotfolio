import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogInfo.css";
import { AVATAR_URL } from "../../utils/constant";

const BlogInfo = () => {
  const [blogData, setBlogData] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const { blogId } = useParams();
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  console.log("body rendered");
  useEffect(() => {
    fetchBlogData();
    fetchAllBlog();
  }, [blogId]);
  const fetchAllBlog = async () => {
    const data = await fetch(
      "https://mushy-calf-nightgown.cyclic.app/api/v1/blogs/"
    );
    const json = await data.json();
    setBlogs(json.data);
  };
  const fetchBlogData = async () => {
    const data = await fetch(
      "https://mushy-calf-nightgown.cyclic.app/api/v1/blogs/blog/" + blogId
    );
    const json = await data.json();
    setBlogData(json.data);
  };

  if (blogData === null || blogs === null) return <h1>Loading</h1>;
  const { author, title, content, createdAt, image } = blogData;
  let date = new Date(createdAt);
  date = date.toLocaleDateString("en-US", options);

  return (
    <div className="blog-info-container">
      <div className="blog-info-div">
        <div className="blog-img">
          <img src={image} alt="" />
        </div>
        <h1 className="blog-title">{title}</h1>
        <div className="blog-details">
          <img src={AVATAR_URL} alt="avatar" className="avatar" />
          <h3>{author}</h3>|<h3> {date}</h3>
        </div>
        <div className="blog-content">
          <p>{content}</p>
        </div>
      </div>
      <div className="recent-blog-container">
        <h1>Recent blogs</h1>
        {blogs.map((blog) => {
          return (
            <Link to={"/blogs/" + blog._id} key={blog._id}>
              <div className="mini-blog-card">
                <img src={blog.image} alt="blog-image" />
                <p>{blog.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogInfo;
