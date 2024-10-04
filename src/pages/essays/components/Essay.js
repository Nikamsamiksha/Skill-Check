import React from 'react'
import { Point } from './Point'

export const Essay = ({ essay }) => {
    console.log(essay)

    return (
        <>
            {
                essay &&
                <div>
                    <h5 className='bg-primary-300 my-2 lg:my-5 text-center font-bold text-xl lg:text-3xl p-3 rounded-lg games-font'>{essay.title}</h5>
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
