import React, { useEffect, useState } from "react";
import useBookData from "../../Hooks/useBookData";
import { getStoredData } from "../../utilites/LocalStorage";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);
  const { books } = useBookData();
  const [bookIdData, setBookidData] = useState([]);
  // console.log(books)
  useEffect(() => {
    const storedBookData = getStoredData();
    if (books.length > 0) {
      const localBookData = [];
      for (const id of storedBookData) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          localBookData.push(book);
        }
      }
      setBookidData(localBookData);
      console.log(storedBookData, localBookData);
    }
  }, []);
  console.log(bookIdData);

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
          <TabPanel> <h2>Read Books</h2></TabPanel>
          <TabPanel><h2>Wishlist Book</h2></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBook;
