import React from 'react';
import useBookData from '../../Hooks/useBookData'
import SingleBookCard from '../SingleBookCardHome/SingleBookCard';

const BookCardHome = () => {
   const {books} = useBookData();
    console.log(books)


    return (
        <div className='mt-24 max-w-6xl mx-auto'>
            <h2 className='text-4xl text-center mb-8 font-bold'>Books</h2>
            {
                books.map((item) => <SingleBookCard key={item.id} item={item}></SingleBookCard>)
            }
        </div>
    );
};

export default BookCardHome;