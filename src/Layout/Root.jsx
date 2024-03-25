import React from 'react';
import NavBar from '../Pages/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;