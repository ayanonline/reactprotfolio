import React, { useState } from "react";
import "./BlogAdmin.css";

function BlogAdmin() {
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
        setMessage("Blog is created successfully ✨🎈");
        setAuthor("");
        setTitle("");
        setContent("");
        setFile(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <form className="create-blog" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="author">author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <div>
          <label htmlFor="file">File:</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
      <label htmlFor="">{message}</label>
    </>
  );
}

export default BlogAdmin;
