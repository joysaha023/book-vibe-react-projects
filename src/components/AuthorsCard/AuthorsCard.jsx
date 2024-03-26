import React from "react";

const AuthorsCard = ({ book }) => {
  return (
    <div className="">
      <div className="card w-full bg-base-100 shadow-none border">
        <figure className="px-10 pt-10">
          <img
            src={book.authorImage}
            alt="Shoes"
            className="rounded-2xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-semibold">{book.author}</h2>
          
        </div>
      </div>
    </div>
  );
};

export default AuthorsCard;
