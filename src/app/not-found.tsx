import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-3">404 - Page Not Found</h1>
      <p className="text-base text-gray-600 mb-4">
        Oops! The page you&#39;re looking for doesn&#39;t exist or may have been
        moved
      </p>
      <Link href="/">
        <span className="text-blue-500 hover:underline">Go back home</span>
      </Link>
    </div>
  );
};

export default NotFound;
