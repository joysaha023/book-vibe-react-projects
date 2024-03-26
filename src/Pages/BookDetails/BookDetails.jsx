import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useBookData from "../../Hooks/useBookData";
import Hashtag from "../../components/HashTag/Hashtag";

const BookDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === idInt);
  console.log(book);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="card lg:card-side bg-base-100 mx-1 shadow-none">
        <figure className="bg-[#F3F3F3] rounded-lg p-20">
          <img src={book.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.bookName}</h2>
          <span>By : {book.author}</span>
          <div className="flex flex-col my-3 w-full">
            <div className="border border-dashed"></div>
          </div>
          <span>{book.category}</span>
          <div className="flex flex-col my-3 w-full">
            <div className="border border-dashed"></div>
          </div>
          <p>Review: {book.review}</p>
          <div className="flex  gap-3">
            <h2>tag</h2>
            {book.tags.map((tag, idx) => (
              <Hashtag key={idx} tag={tag}></Hashtag>
            ))}
          </div>
          <div className="flex flex-col my-3 w-full">
            <div className="border border-dashed"></div>
          </div>
          <div>
            <div className="">
              <div className="flex gap-5">
                <h2>Number of Pages:</h2>
                <h2>{book.totalPages}</h2>
              </div>
              <div  className="flex gap-[76px]">
                <h2>Publisher:</h2>
                <h2>{book.publisher}</h2>
              </div>
              <div  className="flex gap-[14px]">
                <h3>Year of Publishing:</h3>
                <h2>{book.yearOfPublishing}</h2>
              </div>
              <div  className="flex gap-[100px]">
                <h4>Rating:</h4>
                <h2>{book.rating}</h2>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
