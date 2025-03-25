import React from 'react'

export const Option = ({ option, optionAlphabet, optionNumber, setSelectedAnswer, flag, image }) => {
    
    return (
        <>
            {
                flag ?
                    <div className="my-1 lg:my-2 flex flex-row bg-primary-400 rounded-lg px-2 lg:px-5 py-1.5 lg:py-3 text-center items-center cursor-pointer hover:shadow-lg" onClick={(e) => setSelectedAnswer(e, optionNumber - 1)}>
                        <div className='bg-white rounded-full p-1 lg:p-2 px-2.5 lg:px-4 text-md lg:text-xl m-1 mx-2'>{optionAlphabet}</div>
                        {
                            option ?
                                <label htmlFor="green-radio" className='text-md lg:text-xl m-1 mx-2'>{option}</label>
                                :
                                <img src={image} alt={optionAlphabet} className='w-20 h-20'/>
                        }

                    </div>
                    :
                    <div className="my-1 lg:my-2 flex flex-row bg-primary-200 rounded-lg px-2 lg:px-5 py-1.5 lg:py-3 text-center items-center cursor-pointer hover:shadow-lg" onClick={(e) => setSelectedAnswer(e, optionNumber - 1)}>
                        <div className='bg-white rounded-full p-1 lg:p-2 px-2.5 lg:px-4 text-md lg:text-xl m-1 mx-2'>{optionAlphabet}</div>
                        {
                            option ?
                                <label htmlFor={optionAlphabet} className='text-md lg:text-xl m-1 mx-2'>{option}</label>
                                :
                                <img src={image} alt={optionAlphabet} className='w-20 h-20'/>
                        }
                    </div>
            }
            <input className="hidden" name="colored-radio" checked={flag} />
        </>

    )
}