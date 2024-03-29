import React, { useState, useEffect, useRef } from "react";
import "./BlogAdmin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import JoditEditor from "jodit-react";

function BlogAdmin() {
  const [blogData, setBlogData] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const editor = useRef(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleContentChange = (event) => {
    // setContent(event.target.value);
    setContent(event);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // for get all blog
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
  }, []);

  // toast options
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

  //form validation
  function isValid() {
    if (
      title.length >= 2 &&
      author.length >= 2 &&
      content.length >= 5 &&
      file !== null
    ) {
      return true;
    } else {
      return false;
    }
  }

  // for creating a new blog
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid()) {
      setIsUploading(true);
      const id = toast.loading("Uploading blog...");
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
          getData();
          toast.update(id, {
            render: "Blog is created successfully✅",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          setIsUploading(false);
          setAuthor("");
          setTitle("");
          setContent("");
          setFile(null);
        })
        .catch((error) => {
          setIsUploading(false);
          toast.update(id, {
            render: "Failed to create blog✖",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
          setAuthor("");
          setTitle("");
          setContent("");
          setFile(null);
        });
    }
  };

  // for delete blog
  async function deleteHnadler(id) {
    setIsDeleting(true);
    const id1 = toast.loading("Deleting blog...");
    await axios
      .delete(`https://blog-xh2n.onrender.com/api/v1/blogs/blog/${id}`)
      .then((response) => {
        setIsDeleting(false);
        getData();
        toast.update(id1, {
          render: "Blog is deleted successfully✅",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      })
      .catch((error) => {
        setIsDeleting(false);
        toast.update(id1, {
          render: "Failed to delete blog✖",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
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
            {/* <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
            /> */}
            <JoditEditor
              ref={editor}
              onChange={handleContentChange}
              value={content}
            />
          </div>
          <div className="input">
            <label htmlFor="file">File:</label>
            <input type="file" id="file" onChange={handleFileChange} />
          </div>
          <div className="input">
            <button
              disabled={isUploading || !isValid()}
              className={isValid() && !isUploading ? "btn" : "disable"}
              type="submit"
            >
              {isUploading ? "Uploading..." : "Upload"}
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
