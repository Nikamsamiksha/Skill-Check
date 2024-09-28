import React from 'react'
import { QuestionPill } from './QuestionPill';

export const QuestionPills = ({ currentQuestion, setCurrentQuestion }) => {
    const noq = [1, 2, 3, 4];
    let i = 0;
    
    return (
        <div className="flex flex-row justify-evenly lg:justify-start">
            {
                noq.map(n => (
                    currentQuestion === i++ ?
                    <QuestionPill n={n} key={n} flag={true} i={i} setCurrentQuestion={setCurrentQuestion}/>
                    : 
                    <QuestionPill n={n} key={n} flag={false} i={i} setCurrentQuestion={setCurrentQuestion} />
                ))
            }
        </div>
    )
}
