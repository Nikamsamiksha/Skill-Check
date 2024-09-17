import React from 'react'
import { EssayPill } from './EssayPill';

export const EssayPills = () => {
    const noe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="flex flex-row justify-start">
            {
                noe.map(n => (
                    <EssayPill n={n} key={n}/>
                ))
            }
        </div>
    )
}