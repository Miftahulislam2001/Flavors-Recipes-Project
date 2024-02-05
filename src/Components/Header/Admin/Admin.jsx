import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';


const Admin = () => {
    return (
        <div className='bg-black'>
           <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Admin;