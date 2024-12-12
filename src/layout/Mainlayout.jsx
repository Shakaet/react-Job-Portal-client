import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';


const Mainlayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
        </div>
    );
};

export default Mainlayout;