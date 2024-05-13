import React from 'react';
import logo from '../../../assets/logo/google.png'

const Header = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between bg-blue-200 p-5 mt-4'>
                <div>
                    <img className='w-3/4' src={logo} alt="web-logo" />
                </div>
                <div className='flex'>
                    <input className='p-2 focus:outline-none w-[250px] ' type="text" />
                    <button className='bg-emerald-600 rounded text-white px-5 mx-2 hover:bg-emerald-900 hover:text-white transition-all'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;