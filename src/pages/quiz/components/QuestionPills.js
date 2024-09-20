import React, { useEffect } from 'react'
import { QuestionPill } from './QuestionPill';

export const QuestionPills = () => {
    const noq = [1, 2, 3, 4];

    return (
        <div className="flex flex-row justify-evenly lg:justify-start">
            {
                noq.map(n => (
                    <QuestionPill n={n} key={n}/>
                ))
            }
        </div>
    )
}
