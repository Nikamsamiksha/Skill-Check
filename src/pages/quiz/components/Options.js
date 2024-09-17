import React from 'react'
import { Option } from './Option';

export const Options = ({ question }) => {

    const optionAlphabets = ["A", "B", "C", "D"];
    // const options = [1, 2, 3, 4];
    let i = 0;
   
    return (
        <div className='my-5'>
            {
                question && question.options.map(option => (
                    <Option option={option} optionAlphabet={optionAlphabets[i++]} />
                ))
            }
        </div>
    )
}
