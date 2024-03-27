import React from "react";
import Hashtag from "../HashTag/Hashtag";
import { CiLocationOn } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const ReadBookList = ({ readBook }) => {
  return (
    <div className="max-w-6xl mx-auto my-6 ">
      <div className="card md:card-side bg-base-100 shadow-none border">
        <figure className="bg-[#F3F3F3] p-6 m-6 rounded-lg py-4">
          <img src={readBook.image} alt={readBook.bookName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{readBook.bookName}</h2>
          <span>{readBook.author}</span>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
            <div className="flex  gap-3">
              <h2 className="text-base font-bold">Tag</h2>
              {readBook.tags.map((tag, idx) => (
                <Hashtag key={idx} tag={tag}></Hashtag>
              ))}
            </div>
            <div className="flex items-center gap-2">
            <CiLocationOn />
            <h2>Year of Publishing : {readBook.yearOfPublishing}</h2>
            </div>
          </div>
          <div className="flex gap-4">
          <div className="flex items-center gap-2">
          <FaUserGroup />
            <h2>Page : {readBook.publisher}</h2>
            </div>
          <div className="flex items-center gap-2">
          <MdOutlineContactPage />
            <h2>Publisher : {readBook.totalPages}</h2>
            </div>
          </div>
          <div className="flex flex-col my-3 w-full">
            <div className="border border-dashed"></div>
          </div>
          <div className="card-actions justify-star">
          <button className="btn-sm bg-blue-100 text-base font-medium border-0 text-[#328EFF] rounded-full">Category : {readBook.category}</button>
          <button className="btn-sm bg-orange-100 text-base font-medium border-0 text-[#FFAC33] rounded-full">Rating : {readBook.rating}</button>
            <Link to={`/book-details/${readBook.bookId}`} className="btn btn-sm rounded-full bg-[#23BE0A] text-white">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBookList;
