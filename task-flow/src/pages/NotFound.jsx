import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <Link to="/" className="btn-primary mt-4">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
