import React from "react";
import { FaRegStar } from "react-icons/fa6";
import Hashtag from "../HashTag/Hashtag";
import { Link } from "react-router-dom";

const SingleBookCard = ({item}) => {
    const {bookName, image, bookId, author, category, rating, tags} = item || {}

  return (
    <Link to={`/book-details/${bookId}`} className="card h-full w-full bg-base-100 shadow-none border">
      <figure className="bg-[#F3F3F3] rounded-xl py-8 m-6">
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-3">
          {
            tags.map((tag, idx) => <Hashtag key={idx} tag={tag}></Hashtag>)
          }
        </div>
      
        <h2 className="card-title text-2xl font-bold">{bookName}</h2>
        <p className="text-base font-medium">By : {author}</p>
        <div className="flex flex-col my-3 w-full">
         <div className="border border-dashed"></div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base font-medium">{category}</p>
          <div className="flex items-center gap-2">
            <p className="text-base font-medium">{rating}</p>
            <p className="text-lg font-medium"><FaRegStar /></p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleBookCard;
