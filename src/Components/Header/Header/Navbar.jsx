import React, { useState } from 'react';
import Logo from '../../../assets/logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { IoRestaurantSharp } from "react-icons/io5";


const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className='w-full bg-black opacity-90 fixed z-10'>
            <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
                <a href="/" className='flex items-center justify-center text-white text-lg cursor-pointer'>
                    <img className='hidden md:block w-8 h-8 lg:w-14 lg:h-14' src={Logo} alt="logo" />
                    Flavor <span>Recipes</span>
                </a>

                <ul className='hidden md:flex text-white gap-6'>
                    <li><a href="/">Home</a></li>    
                    <li><a href="/recipes">Recipes</a></li>    
                    <li><a href="/favorites">Favorites</a></li>    
                </ul>
    
                <button className='block md:hidden text-white text-xl'
                    onClick={() => setOpen(prev => !prev)}>
                    {open ? <IoRestaurantSharp /> : <HiMenuAlt3 />}
                </button>

                <button className='custom-btn hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full man-w-[130px]'>Sign in</button>
            </nav>
            <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}>
                <a href="/">Home</a>
                <a href="/#recipes">Recipes</a>
                <a href="/">Favorites</a>
            </div>
        </header>
    );
};

export default Navbar;