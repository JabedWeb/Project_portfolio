import React from 'react';
import './404.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="error-wrapper  ">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Page not found</h2>
        <p className="error-description">
          The page you're looking for does not exist. Please check the URL or
          navigate back to the homepage.
        </p>
        <Link to="/" className="error-button">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
