import React from 'react'
import games from '../../../assets/Games.svg';
import message from '../../../assets/Message.svg';
import essays from '../../../assets/PencilSquare.svg';
import { FeatureCard } from './FeatureCard';

export const FeatureCards = () => {

    const features = [
        {
            "id": 1,
            "title": "Games",
            "img": games,
        },
        {
            "id": 2,
            "title": "Essays",
            "img": message,
        },
        {
          "id": 3,
          "title": "AI Chat",
          "img": essays,
        }
    ];

    return (
        <div className='grid grid-cols-3 gap-2 lg:gap-5 mx-5 lg:m-5'>
            {
                features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature}/>
                ))
            }
        </div>
    )
}