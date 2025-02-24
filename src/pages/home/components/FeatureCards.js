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
            "description": "A fun and interactive space where kids can play educational games. From math puzzles to other games, our games make studying exciting while helping children develop critical thinking."
        },
        {
            "id": 2,
            "title": "Essays",
            "img": message,
            "description": "A creative platform for kids to explore and improve their writing skills. This section offers engaging essay topics, to help children express their thoughts and ideas clearly. "
        }
    ];

    return (
        <div className='grid grid-cols-2 gap-2 lg:gap-5 mx-5 lg:m-5'>
            {
                features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature}/>
                ))
            }
        </div>
    )
}