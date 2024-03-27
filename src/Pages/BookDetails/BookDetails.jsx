import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Hashtag from "../../components/HashTag/Hashtag";
import { saveDataToLocalStorage } from "../../utilites/LocalStorage";
import { toast } from "react-toastify";
import { saveDataToWishLocalStorage } from "../../utilites/LocalStorageWish";




const BookDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === idInt);

  const handleReadBook = () => {
    saveDataToLocalStorage(book);
  }

  const handleWishlistBook = () => {
    saveDataToWishLocalStorage(book)
  }

  return (
    <div className="max-w-6xl mx-auto my-4">
      <div className="card lg:card-side bg-base-100 mx-1 shadow-none">
        <figure className="bg-[#F3F3F3] rounded-lg p-20">
          <img src={book.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">{book.bookName}</h2>
          <span className="text-xl font-medium">By : {book.author}</span>
          <div className="flex flex-col my-3 w-full">
            <div className="border border-dashed"></div>
          </div>
          <span className="text-xl font-medium">{book.category}</span>
          <div className="flex flex-col my-3 w-full">
            <div className="border border-dashed"></div>
          </div>
          <p className="text-base"><span className="font-bold">Review:</span> {book.review}</p>
          <div className="flex  gap-3">
            <h2 className="text-base font-bold">Tag</h2>
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
                <h2 className="font-semibold">{book.totalPages}</h2>
              </div>
              <div  className="flex gap-[76px]">
                <h2>Publisher:</h2>
                <h2 className="font-semibold">{book.publisher}</h2>
              </div>
              <div  className="flex gap-[14px]">
                <h3>Year of Publishing:</h3>
                <h2 className="font-semibold">{book.yearOfPublishing}</h2>
              </div>
              <div  className="flex gap-[100px]">
                <h4>Rating:</h4>
                <h2 className="font-semibold">{book.rating}</h2>
              </div>
            </div>
          </div>
          <div className="card-actions mt-2 justify-start">
            <button onClick={handleReadBook} className="btn btn-ghost border border-black hover:text-white hover:bg-[#23BE0A] btn-primary">Read</button>
            <button onClick={handleWishlistBook} className="btn bg-[#50B1C9] text-white  hover:text-black">Wishlist</button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default BookDetails;
