import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="max-2-6xl text-center mx-auto">
      <div className="flex mt-12 w-full">
        <div className="grid h-20 flex-grow card bg-red-200 rounded-box place-items-center">
          
        </div>
        <div className="divider divider-horizontal font-bold text-red-600">404</div>
        <div className="grid h-20 flex-grow card bg-red-200 rounded-box place-items-center">
          
        </div>
        
      </div>
      <h2 className="text-4xl mt-10 lg:text-7xl font-bold text-red-500">Page Not Found</h2>
      <p className="text-lg my-6 lg:text-3xl font-medium text-gray-400">Sorry, we couldn't find the page.</p>
      <Link to={"/"} className="btn btn-primary text-white">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;
