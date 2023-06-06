import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
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

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  function isvalid() {
    if (
      formData.user_name !== "" &&
      formData.user_email !== "" &&
      formData.user_phone !== "" &&
      formData.message !== ""
    ) {
      return true;
    } else return false;
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (isvalid()) {
      setIsSending(true);
      emailjs
        .send(
          "service_74vjq9e",
          "template_b9pgd6c",
          formData,
          "liGdjli7eldVA0cB2"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast("Message send successfully");
            setFormData(() => {
              return {
                user_name: "",
                user_email: "",
                user_phone: "",
                message: "",
              };
            });
            setIsSending(false);
          },
          (error) => {
            setIsSending(false);
            console.log(error.text);
            toast("Something went wrong");
          }
        );
    } else {
      toast("please fill all fields");
    }
  };

  return (
    <div id="contact" className="template">
      <ToastContainer {...toastOptions} />
      <div className="contact-container">
        <h2>Contact me</h2>
        <form className="contact-form">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            onChange={(e) => {
              setFormData((prev) => {
                return {
                  ...prev,
                  user_name: e.target.value,
                };
              });
            }}
            value={formData.user_name}
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            onChange={(e) => {
              setFormData((prev) => {
                return {
                  ...prev,
                  user_email: e.target.value,
                };
              });
            }}
            value={formData.user_email}
          />
          <label>Phone</label>
          <input
            type="number"
            name="user_phone"
            onChange={(e) => {
              setFormData((prev) => {
                return {
                  ...prev,
                  user_phone: e.target.value,
                };
              });
            }}
            value={formData.user_phone}
          />
          <label>Message</label>
          <textarea
            name="message"
            onChange={(e) => {
              setFormData((prev) => {
                return {
                  ...prev,
                  message: e.target.value,
                };
              });
            }}
            value={formData.message}
          />
          <button
            className={isSending ? "disabled btn" : "btn"}
            onClick={sendEmail}
            disabled={isSending}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
