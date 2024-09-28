import React from 'react'
import { EssayPill } from './EssayPill';

export const EssayPills = ({ currentEssay, setCurrentEssay }) => {
    const noe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let i = 0;

    return (
        <div className="flex flex-row justify-start">
            {
                noe.map(n => (
                    currentEssay === i++ ?
                        <EssayPill n={n} key={n} i={i} flag={true} setCurrentEssay={setCurrentEssay} />
                        :
                        <EssayPill n={n} key={n} i={i} flag={false} setCurrentEssay={setCurrentEssay}/>
                ))
            }
        </div>
    )
}