import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext';
import { LoginModal } from '../../../components/LoginModal';

export const FeatureCard = ({ feature }) => {

    const [featureTitle , setFeatureTitle] = useState(feature.title);
    const { currentUser } = useAuth();
    const [ show, setShow ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setFeatureTitle(feature.title);
    }, [featureTitle]);

    function checkLogin() {
        currentUser ? navigate("/games") : setShow(!show);
    }

    return (
        <>
            {
                featureTitle === "Games" &&
                <button onClick={checkLogin} className="flex flex-col justify-between bg-primary-600 rounded-lg shadow lg:flex-row">
                    <div className="flex flex-col p-3 lg:p-5 lg:w-3/6">
                        <h5 className="lg:mb-2 text-xl lg:text-4xl font-bold tracking-tight text-gray-900">{feature.title}</h5>
                    </div>
                    <div className='p-3 lg:p-5 lg:w-3/6'>
                        <img className="w-min h-12 lg:h-24 rounded-t-lg" src={feature.img} alt={feature.title} />
                    </div>
                </button>
            } 
            {
                featureTitle === "Essays" &&
                <button onClick={checkLogin} className="flex flex-col justify-between bg-primary-500 rounded-lg shadow lg:flex-row">
                    <div className="flex flex-col p-3 lg:p-5 lg:w-3/6">
                        <h5 className="lg:mb-2 text-xl lg:text-4xl font-bold tracking-tight text-gray-900">{feature.title}</h5>
                    </div>
                    <div className='p-3 lg:p-5 lg:w-3/6'>
                        <img className="w-min h-12 lg:h-24 rounded-t-lg" src={feature.img} alt={feature.title} />
                    </div>
                </button>
            } 
            {
                featureTitle === "AI Chat" &&
                <button onClick={checkLogin} className="flex flex-col justify-between bg-primary-800 rounded-lg shadow lg:flex-row">
                    <div className="flex flex-col p-3 lg:p-5 lg:w-3/6">
                        <h5 className="lg:mb-2 text-xl lg:text-4xl font-bold tracking-tight text-gray-900">{feature.title}</h5>
                    </div>
                    <div className='p-3 lg:p-5 lg:w-3/6'>
                        <img className="w-min h-12 lg:h-24 rounded-t-lg" src={feature.img} alt={feature.title} />
                    </div>
                </button>
            }
            {
                show &&
                <LoginModal show={show} setShow={setShow}/>
            }
        </>  
    )
}