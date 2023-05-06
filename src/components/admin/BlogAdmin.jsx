import React, { useState, useEffect } from "react";
import "./BlogAdmin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function BlogAdmin() {
  const [blogData, setBlogData] = useState([]);
  const options = {
    method: "GET",
    // url: "http://localhost:3000/api/v1/blogs/",
    // url: "https://blog-xh2n.onrender.com/api/v1/blogs", // render server
    url: "https://mushy-calf-nightgown.cyclic.app/api/v1/blogs/", // cyclic server
  };
  const getData = async () => {
    const { data } = await axios.request(options);
    setBlogData(data.data);
  };

  useEffect(() => {
    document.title = "Blog-Admin";
    getData();
  }, [deleteHnadler]);

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progressStyle: { backgroundColor: "#fff" },
    toastStyle: { zIndex: 9999 },
  };

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("content", content);
    formData.append("photo", file);

    fetch("https://blog-xh2n.onrender.com/api/v1/blogs", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        toast("Blog is created successfully✨🎈");
        setAuthor("");
        setTitle("");
        setContent("");
        setFile(null);
      })
      .catch((error) => {
        toast(error.message);
        setAuthor("");
        setTitle("");
        setContent("");
        setFile(null);
      });
  };
  async function deleteHnadler(id) {
    await axios
      .delete(`https://blog-xh2n.onrender.com/api/v1/blogs/blog/${id}`)
      .then((response) => {
        toast("Blog is deleted");
      })
      .catch((error) => {
        toast(error.message);
      });
  }
  return (
    <>
      <div className="container">
        <ToastContainer {...toastOptions} />
        <form className="create-blog" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="author">author:</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={handleAuthorChange}
            />
          </div>
          <div className="input">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
            />
          </div>
          <div className="input">
            <label htmlFor="file">File:</label>
            <input type="file" id="file" onChange={handleFileChange} />
          </div>
          <div className="input">
            <button className="btn" type="submit">
              Upload
            </button>
          </div>
        </form>
        <div className="display">
          <h2>All blogs</h2>
          {blogData.map((blog, index) => {
            return (
              <div key={index}>
                <label htmlFor="">
                  {index + 1}. {blog.title}
                </label>
                <button
                  onClick={() => {
                    deleteHnadler(blog._id);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BlogAdmin;
