import React from 'react'
import { Point } from './Point'

export const Essay = ({ essay }) => {
    console.log(essay)

    return (
        <>
            {
                essay &&
                <div>
                    <h5 className='bg-primary-300 my-5 text-center text-3xl p-3 rounded-lg games-font'>{essay.title}</h5>
                    <div className='bg-primary-50 p-5'>
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
