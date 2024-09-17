import React from 'react'

export const Option = ({option, optionAlphabet}) => {
    
    return (
        <div className='my-2 flex flex-row bg-primary-200 rounded-lg px-5 py-3 text-center items-center cursor-pointer'>
            <div className='bg-white rounded-full p-2 px-4 text-xl m-1 mx-2'>{optionAlphabet}</div>
            <div className='text-xl m-1 mx-2'>{option}</div>
        </div>
    )
}