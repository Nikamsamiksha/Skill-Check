import React, { useEffect, useState } from 'react'
import skillCheckIcon from '../assets/SkillCheckIcon.jpg';
import logOutIcon from '../assets/LogoutIcon.svg';
import logInIcon from '../assets/LogInIcon.svg';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOutModal } from './LogOutModal';
import { Timer } from './Timer';

export const Header = () => {

    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [logoutModalShow, setLogoutModalShow] = useState(false);

    useEffect(() => {
        // console.log(currentUser)
    }, [currentUser])

    
    return (
        <div>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200" >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href='/' className="flex items-center space-x-1 lg:space-x-3 rtl:space-x-reverse">
                        <img src={skillCheckIcon} className="h-8 lg:h-12" alt="Skill Check Icon" />
                        <span className='text-black font-bold text-md lg:text-2xl font-serif'>Skill Check</span>
                    </a>
                    <div className="items-center justify-between md:flex md:w-auto md:order-1 text-md lg:font-bold lg:text-2xl font-sans" id="navbar-sticky">
                        <span>
                            {currentUser && <Timer start={{ initialMinute: 2, initialSecond: 0 }} />}
                        </span>
                    </div>
                    {
                        currentUser ?
                            <button
                                onClick={() => setLogoutModalShow(!logoutModalShow)}
                                className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative hover:cursor-pointer">
                                <img src={logOutIcon} className="w-5 h-5 lg:h-8 lg:w-8" alt='Log Out Icon' />
                            </button>
                            :
                            <button
                                onClick={() => navigate("/login")}
                                className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative hover:cursor-pointer">
                                <img src={logInIcon} className="w-5 h-5 lg:h-8 lg:w-8" alt='Log In Icon' />
                            </button>
                    }
                </div>
            </nav>
            {
                logoutModalShow &&
                <LogOutModal show={logoutModalShow} setShow={setLogoutModalShow} />
            }
        </div>
    )
}
