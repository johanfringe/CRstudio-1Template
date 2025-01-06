import React from "react";

const NotFoundPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">404: Page Not Found</h1>
      <p className="text-lg mt-4 text-gray-600">The page you are looking for does not exist here.</p>
    </main>
  );
};

export default NotFoundPage;
