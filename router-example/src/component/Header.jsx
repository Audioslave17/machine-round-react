import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header () {
    let navigate = useNavigate();
    const goto = (url) => {
        navigate(url);
    }
    return (
        <div className='flex justify-between items-center w-full h-15 px-4 text-white bg-black fixed'>
            <div>
                <h3>Anurag</h3>
            </div>
            <div className='flex space-x-4'>
                <h4 onClick={()=>goto('/about')} className='cursor-pointer'>About</h4>
                <h4 onClick={()=>goto('/home')} className='cursor-pointer'>Home</h4>
                <h4 onClick={()=>goto('/contact')} className='cursor-pointer'>Contact</h4>
            </div>
        </div>
    );
}

export default Header;
