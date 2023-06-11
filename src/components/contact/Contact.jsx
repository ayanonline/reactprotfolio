import React, { useState } from "react";
import axios from "axios";
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
  const [errorMessage, setErrorMessage] = useState(null);

  function isValid() {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re1 = /^[0-9]{10}$/;
    if (formData.user_name === "") {
      setErrorMessage("Name is required");
      return false;
    }
    if (!re.test(String(formData.user_email).toLowerCase())) {
      setErrorMessage("Invalid email address");
      return false;
    }
    if (!re1.test(String(formData.user_phone))) {
      setErrorMessage("Invalid phone number");
      return false;
    }

    if (formData.message === "") {
      setErrorMessage("Message is required");
      return false;
    }
    return true;
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isValid()) {
      setErrorMessage(null);
      setIsSending(true);
      const id = toast.loading("Sending message...");
      try {
        await axios.post("https://send-mail-oskl.onrender.com/send-email", {
          to: "ayang7271@gmail.com", // Replace with recipient's email address
          subject: `Portfolio: New message from ${formData.user_name}`,
          text: `Name: ${formData.user_name}\nEmail: ${formData.user_email}\nPhone: ${formData.user_phone}\nMessage: ${formData.message}`,
        });
        console.log("Email sent successfully!"); // Request was successful
        toast.update(id, {
          render: "Message sent successfully",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        setFormData(() => {
          return {
            user_name: "",
            user_email: "",
            user_phone: "",
            message: "",
          };
        });
        setIsSending(false);
      } catch (error) {
        console.error("Error sending email:", error); // Handle any errors that occur during the API call
        setIsSending(false);
        console.log(error.text);
        toast.update(id, {
          render: "Error sending message",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
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
          <span className="error-message">{errorMessage && errorMessage}</span>
          <button
            className={isSending ? "disabled btn" : "btn"}
            onClick={sendEmail}
            disabled={isSending}
          >
            {isSending ? "Sending" : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
