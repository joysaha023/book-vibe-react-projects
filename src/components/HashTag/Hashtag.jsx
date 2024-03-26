import React from 'react';

const Hashtag = ({tag}) => {
    return (
        (<div className=" mb-2">
            <button className="btn-sm bg-green-100 text-base font-medium border-0 text-[#23BE0A] rounded-full"> {tag}</button>
        </div>)
    );
};

export default Hashtag;