
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
    return (
        <nav className='bg-blue-500 p-4 px-10 text-white flex min-w-[350px] w-full z-10 justify-between fixed'>
            <h1 className='text-2xl font-bold'>Shopping Store</h1>
            <div className='flex gap-4'>
            <Link to="/" className='ml-auto bg-white text-blue-500 p-2 text-lg font-medium rounded-lg'>
                Product 
            </Link>
            <Link to="/cart" className='ml-auto bg-white text-blue-500 p-2 text-lg font-medium rounded-lg'>
                Cart {cartCount}
            </Link>
            </div>
            
        </nav>
    );
};

export default Navbar;
