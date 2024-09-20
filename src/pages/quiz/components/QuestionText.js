import React from 'react'

export const QuestionText = ({ title }) => {
    return (
        <div className='bg-primary-600 rounded-lg text-lg lg:text-2xl px-2 lg:px-5 py-1.5 lg:py-3'>
            {title}
        </div>
    )
}
