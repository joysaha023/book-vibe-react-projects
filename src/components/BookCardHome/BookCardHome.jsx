import React, { useState } from "react";
import useBookData from "../../Hooks/useBookData";
import SingleBookCard from "../SingleBookCardHome/SingleBookCard";

const BookCardHome = () => {
  const { books } = useBookData();
  const [seeAll, setSeeAll] = useState(false);
  
  const handleSeeAll = () => {
    setSeeAll(!seeAll)
  }

  return (
    <div className="mt-10 md:mt-24 max-w-6xl mx-auto">
      <h2 className="text-4xl text-center mb-10 font-bold">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-3 gap-6">
        {books.slice(0, seeAll ? books.length : 6).map((item) => (
          <SingleBookCard key={item.id} item={item}></SingleBookCard>
        ))}
      </div>
      <div className="text-center my-5">
        <button onClick={handleSeeAll} className="btn bg-[#23BE0A] text-white">{!seeAll ? "See All" : "See Less"}</button>
      </div>
    </div>
  );
};

export default BookCardHome;
