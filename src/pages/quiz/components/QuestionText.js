import React from 'react'
import { TextToSpeech } from '../../../components/TextToSpeech';
// import something from '../../../assets/'

export const QuestionText = ({ title, image_url, largeImage, prompt }) => {

    const classNames = largeImage ? "w-80 h-40" : "w-20 h-20";
    return (
        <div className='bg-primary-600 rounded-lg text-lg lg:text-2xl px-2 lg:px-5 py-1.5 lg:py-3'>
            <div className=' flex justify-between'>
                {title}
                <TextToSpeech text={prompt} />
            </div>
            {image_url && <img src={image_url} alt={title} className={classNames} />}
        </div>
    )
}
