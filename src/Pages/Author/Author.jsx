import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AuthorsCard from '../../components/AuthorsCard/AuthorsCard';

const Author = () => {
 const  books  = useLoaderData();


    return (
        <div className='max-w-6xl mx-auto mt-3'>
            <h2 className='text-center text-lg lg:text-2xl font-bold'>Best Author's </h2>
            <div className="divider"></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-2'>
                {
                    books.map((book) => <AuthorsCard key={book.bookId} book={book}></AuthorsCard> )
                }
            </div>
        </div>
    );
};

export default Author;