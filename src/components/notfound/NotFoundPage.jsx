import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="error-container">
      <h1>☹404 - Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link className="btn" to="/">
        Go back to the home page
      </Link>
    </div>
  );
}

export default NotFoundPage;
