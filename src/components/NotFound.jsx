// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-500">404</h1>
        <p className="text-2xl font-medium text-gray-700">Page Not Found</p>
        <p className="text-lg text-gray-500 mt-4">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
