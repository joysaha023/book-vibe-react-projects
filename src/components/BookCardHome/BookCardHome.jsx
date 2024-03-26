import React from "react";
import useBookData from "../../Hooks/useBookData";
import SingleBookCard from "../SingleBookCardHome/SingleBookCard";

const BookCardHome = () => {
  const { books } = useBookData();
  

  return (
    <div className="mt-24 max-w-6xl mx-auto">
      <h2 className="text-4xl text-center mb-8 font-bold">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-3 gap-6">
        {books.map((item) => (
          <SingleBookCard key={item.id} item={item}></SingleBookCard>
        ))}
      </div>
    </div>
  );
};

export default BookCardHome;
