import React, { useEffect, useState } from "react";


import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getDataFromLocal } from "../../utilites/LocalStorage";
import ReadBookList from "../../components/ReadBookList/ReadBookList";

const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [readBooksData, setreadBookData] = useState([]);
    
    useEffect(() => {
        const data = getDataFromLocal();
        setreadBookData(data)
    }, [])

  return (
    <div className="max-w-6xl mx-auto  mt-2">
      <div className="bg-gray-200 rounded-lg  text-center">
        <h2 className="py-3 lg:py-6 text-xl lg:text-3xl font-bold">Book</h2>
      </div>
      <div className="dropdown flex justify-center mt-8">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort By
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
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
                readBooksData.map((readBook) => <ReadBookList key={readBook.bookId} readBook={readBook}></ReadBookList>)
            }
          </TabPanel>
          <TabPanel><h2>Wishlist Book</h2></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBook;
