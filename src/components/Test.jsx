import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Test() {
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
  const options = {
    method: "GET",
    // url: "http://localhost:3000/api/v1/blogs/",
    url: "https://blog-xh2n.onrender.com/api/v1/blogs", // render server
    // url: "https://mushy-calf-nightgown.cyclic.app/api/v1/blogs/", // cyclic server
  };
  const getData = async () => {
    // const { data } = await axios.request(options);
    // console.log(data);
    // toast.promise(getData, {
    //   pending: "Promise is pending",
    //   success: "Promise resolved 👌",
    //   error: "Promise rejected 🤯",
    // });
    const response = await toast.promise(
      fetch("https://blog-xh2n.onrender.com/api/v1/blogs"),
      {
        pending: "Promise is pending",
        success: {
          render({ data }) {
            console.log();
            return "Promise resolved 👌";
          },
        },
        error: "Promise rejected 🤯",
      }
    );
  };

  return (
    <div>
      <ToastContainer {...toastOptions} />
      <div className="container">
        <button onClick={getData}>clickme</button>
      </div>
    </div>
  );
}

export default Test;
