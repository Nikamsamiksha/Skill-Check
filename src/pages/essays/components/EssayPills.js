import React from 'react';
import { EssayPill } from './EssayPill';

export const EssayPills = ({ currentEssay, setCurrentEssay, essays }) => {
    return (
        <div>
            <div className="lg:flex lg:flex-row lg:justify-start flex-wrap gap-2">
                {
                    essays.map((_, index) => (
                        <EssayPill
                            key={index}
                            n={index + 1}
                            i={index}
                            flag={currentEssay === index}
                            setCurrentEssay={setCurrentEssay}
                        />
                    ))
                }
            </div>
        </div>
    )
}
