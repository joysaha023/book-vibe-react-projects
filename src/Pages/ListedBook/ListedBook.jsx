import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getDataFromLocal } from "../../utilites/LocalStorage";
import ReadBookList from "../../components/ReadBookList/ReadBookList";

const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [readBooksData, setreadBookData] = useState([]);
    const [sortBookData, setSortBookData] = useState([]);
   
    const handleSortBookData = (filter)  => {

      if(filter === 'all'){
        setSortBookData(readBooksData);
      }
      else if (filter === 'rating'){
        const temp = readBooksData.sort((a, b) => b.rating - a.rating);
        // console.log(desendingData)
        setSortBookData(temp)
      }
      else if(filter === 'pages'){
        const pages = readBooksData.sort((a, b) => b.totalPages - a.totalPages)
        setSortBookData(pages)
      }
      else if(filter === 'year'){
        const year = readBooksData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing )
        setSortBookData(year)
      }
      
      
    }
    
    
    useEffect(() => {
        const data = getDataFromLocal();
        setreadBookData(data)
        // setSortBookData(data)
    }, [])


    const links = (
      <>
         <li onClick={() => handleSortBookData('all')}>
            <a>All</a>
          </li>
         <li onClick={() => handleSortBookData('rating')}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleSortBookData('pages')}>
            <a>Number of pages</a>
          </li>
          <li onClick={() => handleSortBookData('year')}>
            <a>Publisher year</a>
          </li>
      </>
    )

  return (
    <div className="max-w-6xl mx-auto  mt-2">
      <div className="bg-gray-200 rounded-lg  text-center">
        <h2 className="py-3 lg:py-6 text-xl lg:text-3xl font-bold">Book</h2>
      </div>
      <div className="dropdown flex justify-center mt-8">
        <div tabIndex={0} role="button" className="btn m-1 flex items-center bg-[#23BE0A] text-white">
          Sort By
          <IoIosArrowDown className="text-xl" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 font-medium rounded-box w-52"
        >
         {links}
        </ul>
      </div>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            {
                sortBookData.map((readBook) => <ReadBookList key={readBook.bookId} readBook={readBook}></ReadBookList>)
            }
          </TabPanel>
          <TabPanel><h2>Wishlist Book</h2></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBook;
