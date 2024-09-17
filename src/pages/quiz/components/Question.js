import React from 'react'
import { QuestionText } from './QuestionText'
import { Option } from './Option';

export const Question = ({ question }) => {
  console.log(question)
  const optionAlphabets = ["A", "B", "C", "D"];
  let i = 0;

  return (
    <>
    {
      question && 
      <div className="questions w-9/12 pr-5">
      <QuestionText title={question.title} />
      {/* <Options question={question} /> */}
      <div className='my-5'>
            {
                question && question.options.map(option => (
                    <Option option={option.title} optionAlphabet={optionAlphabets[i++]} />
                ))
            }
        </div>
    </div>
    }
    </>
    
  )
}
