import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const FeatureCard = ({ feature }) => {

    const [featureTitle , setFeatureTitle] = useState(feature.title);

    useEffect(() => {
        setFeatureTitle(feature.title);
    }, [featureTitle]);

    return (
        <>
            {
                featureTitle === "Games" &&
                <Link to="/games" className="flex flex-col justify-between bg-primary-600 rounded-lg shadow lg:flex-row">
                    <div className="flex flex-col p-3 lg:p-5 lg:w-3/6">
                        <h5 className="lg:mb-2 text-xl lg:text-4xl font-bold tracking-tight text-gray-900">{feature.title}</h5>
                    </div>
                    <div className='p-3 lg:p-5 lg:w-3/6'>
                        <img className="w-min h-12 lg:h-24 rounded-t-lg" src={feature.img} alt={feature.title} />
                    </div>
                </Link>
            } 
            {
                featureTitle === "Essays" &&
                <Link to="/essays" className="flex flex-col justify-between bg-primary-50 rounded-lg shadow lg:flex-row">
                    <div className="flex flex-col p-3 lg:p-5 lg:w-3/6">
                        <h5 className="lg:mb-2 text-xl lg:text-4xl font-bold tracking-tight text-gray-900">{feature.title}</h5>
                    </div>
                    <div className='p-3 lg:p-5 lg:w-3/6'>
                        <img className="w-min h-12 lg:h-24 rounded-t-lg" src={feature.img} alt={feature.title} />
                    </div>
                </Link>
            } 
            {
                featureTitle === "AI Chat" &&
                <Link to="/chat" className="flex flex-col justify-between bg-primary-800 rounded-lg shadow lg:flex-row">
                    <div className="flex flex-col p-3 lg:p-5 lg:w-3/6">
                        <h5 className="lg:mb-2 text-xl lg:text-4xl font-bold tracking-tight text-gray-900">{feature.title}</h5>
                    </div>
                    <div className='p-3 lg:p-5 lg:w-3/6'>
                        <img className="w-min h-12 lg:h-24 rounded-t-lg" src={feature.img} alt={feature.title} />
                    </div>
                </Link>
            }
        </>  
    )
}