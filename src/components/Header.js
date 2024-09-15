import React from 'react'
import skillCheckIcon from '../assets/Skill Check Icon.jpg';
import logOutIcon from '../assets/LogoutIcon.svg';


export const Header = () => {
    return (
        <div>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href='/' className="flex items-center space-x-1 lg:space-x-3 rtl:space-x-reverse">
                        <img src={skillCheckIcon} className="h-8 lg:h-12" alt="Skill Check Icon" />
                        <span className='text-black font-bold text-md lg:text-2xl font-serif'>Skill Check</span>
                    </a>
                    <div className="items-center justify-between md:flex md:w-auto md:order-1 text-md lg:font-bold lg:text-2xl font-sans" id="navbar-sticky">
                        <span>15:23</span>
                        
                    </div>
                    <button className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative hover:cursor-pointer">
                        <img src={logOutIcon} className="w-5 h-5 lg:h-8 lg:w-8" alt='Log Out Icon'/>
                    </button>
                </div>
            </nav>

        </div>
    )
}
