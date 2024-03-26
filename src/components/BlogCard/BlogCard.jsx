import React from "react";

const BlogCard = ({ item }) => {
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-none border">
        <figure>
          <img
            src={item.image}
            alt={item.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
