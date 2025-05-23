import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext';
import { LoginModal } from '../../../components/LoginModal';
import { TextToSpeech } from '../../../components/TextToSpeech';

export const FeatureCard = ({ feature }) => {

    const [featureTitle, setFeatureTitle] = useState(feature.title);
    const { currentUser } = useAuth();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setFeatureTitle(feature.title);
    }, [featureTitle]);

    function checkLogin(link) {
        currentUser ? navigate(`/${link}`) : setShow(!show);
    }

    return (
        <>
            {
                featureTitle === "Games" &&
                <button className="flex flex-col justify-between bg-primary-600 rounded-lg shadow lg:flex-row">
                    <div className="flex flex-col p-3 lg:p-5 lg:w-3/6 justify-start ">
                        <div className='flex flex-row items-center'>
                            <h5 onClick={() => checkLogin("games")} className="lg:mb-2 text-xl lg:text-4xl font-bold tracking-tight text-gray-900 text-start">{feature.title}</h5>
                            <TextToSpeech text={feature.title + feature.description} />
                        </div>
                        <div className="mb-3 text-lg font-normal text-black text-start">{feature.description}</div>
                    </div>
                    <div className='p-3 lg:p-5 lg:w-3/6'>
                        <img className="w-min h-48 rounded-t-lg" src={feature.img} alt={feature.title} />
                    </div>
                </button>
            }
            {
                featureTitle === "Essays" &&
                <button className="flex flex-col justify-between bg-primary-500 rounded-lg shadow lg:flex-row">
                    <div className="flex flex-col p-3 lg:p-5 lg:w-3/6 justify-start ">
                        <div className='flex flex-row items-center'>
                            <h5 onClick={() => checkLogin("essays")} className="lg:mb-2 text-xl lg:text-4xl font-bold tracking-tight text-gray-900 text-start">{feature.title}</h5>
                            <TextToSpeech text={feature.title + feature.description} />
                        </div>
                        <div className="mb-3 text-lg font-normal text-black text-start">{feature.description}</div>
                    </div>
                    <div className='p-3 lg:p-5 lg:w-3/6'>
                        <img className="w-min h-48 rounded-t-lg" src={feature.img} alt={feature.title} />
                    </div>
                </button>
            }
            {
                show &&
                <LoginModal show={show} setShow={setShow} />
            }
        </>
    )
}