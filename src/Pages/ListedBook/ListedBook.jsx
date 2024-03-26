import React from 'react';
import useBookData from '../../Hooks/useBookData';

const ListedBook = () => {
    const  {books} = useBookData
    console.log(books)
    return (
        <div>
            <h2>listed book</h2>
        </div>
    );
};

export default ListedBook;