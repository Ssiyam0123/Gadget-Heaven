import React from 'react';
import { FaSadCry } from 'react-icons/fa';

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-">
      <div className="text-center">
        <h1 className="font-extrabold text-9xl">404</h1>
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="text-gray-600">Sorry, the page you’re looking for doesn’t exist.</p>
      </div>
    </div>
  );
}


