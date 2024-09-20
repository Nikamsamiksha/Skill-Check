import React from 'react'

export const Option = ({option, optionAlphabet}) => {
    
    return (
        <div className='my-1 lg:my-2 flex flex-row bg-primary-200 rounded-lg px-2 lg:px-5 py-1.5 lg:py-3 text-center items-center cursor-pointer'>
            <div className='bg-white rounded-full p-1 lg:p-2 px-2.5 lg:px-4 text-md lg:text-xl m-1 mx-2'>{optionAlphabet}</div>
            <div className='text-md lg:text-xl m-1 mx-2'>{option}</div>
        </div>
    )
}