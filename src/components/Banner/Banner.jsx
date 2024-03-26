import React from "react";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="hero max-w-6xl mx-auto rounded-xl px-2 lg:px-0 h-full lg:min-h-screen mt-4 lg:mt-12 bg-base-200">
      <div className="hero-content flex-col gap-4 lg:gap-20 lg:flex-row-reverse">
        <img
          src="/images/banner-book.png"
          className="max-w-sm rounded-lg shadow-none w-full"
        />
        <div>
          <h1 className="text-2xl my-3  md:text-5xl lg:w-[526px] font-bold">Books to freshen up your bookshelf</h1>
          
          <Link to={"/listedBooks"} className="btn mt-6 bg-[#23BE0A] text-white hover:text-black">View The List</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
