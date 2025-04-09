import React from 'react'
import { Point } from './Point'
import { TextToSpeech } from '../../../components/TextToSpeech'

export const Essay = ({ essay }) => {
    return (
        <>
            {
                essay &&
                <div>
                    <div className='bg-primary-300 my-2 lg:my-5 font-bold text-xl lg:text-3xl p-3 rounded-lg games-font flex items-center justify-between'>
                        <h5>{essay.title}</h5>
                        <TextToSpeech text={essay.title + essay.points[0]} />
                    </div>
                    <div className='bg-primary-50 p-2 lg:p-5'>
                        {
                            essay.points[0].map(point => (
                                <Point point={point} />
                            ))
                        }
                    </div>
                </div>
            }
        </>

    )
}
