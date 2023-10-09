import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex justify-between item-center h-25 max-w-[1240px] mx-auto text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Finxo</h1>
            <ul className='hidden md:flex'>
                <li className='p-5 cursor-pointer hover:underline  hover:text-[#00df9a]'><Link to={"/"}>Home</Link></li>
                <li className='p-5 cursor-pointer hover:underline    hover:text-[#00df9a]'>Company</li>
                <li className='p-5 cursor-pointer hover:underline    hover:text-[#00df9a]'>Resources</li>
                <li className='p-5 cursor-pointer hover:underline    hover:text-[#00df9a]'><Link to={"/about"}>Aboutus</Link></li>
                <li className='p-5 cursor-pointer hover:underline    hover:text-[#00df9a]'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Finxo</h1>
                <ul className='pt-12 uppercase p-4'>
                    <li className='p-5 border-b border-gray-500'>Home</li>
                    <li className='p-5 border-b border-gray-500'>Company</li>
                    <li className='p-5 border-b border-gray-500'>Resources</li>
                    <li className='p-5 border-b border-gray-500'>About</li>
                    <li className='p-5'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
