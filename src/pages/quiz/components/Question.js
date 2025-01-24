import React, { useEffect, useState } from 'react'
import { QuestionText } from './QuestionText'
import { Option } from './Option';

export const Question = ({ question , handleAnswerChange}) => {
  const optionAlphabets = ["A", "B", "C", "D"];
  let i = 0;
  const [selectedAnswer, setSelectedAnswer] = useState(5);

  useEffect(() => {
    setSelectedAnswer(5)
  }, [question]);

  const changeAnswer = (e,value) => {
    setSelectedAnswer(value);
    handleAnswerChange(e,value);
  }

  return (
    <>
      {
        question &&
        <div className="questions w-full lg:w-9/12 lg:pr-5">
          <QuestionText title={question.title} />
          <div className='my-5'>
            {
              question && question.options.map(option => (
                option === question.options[selectedAnswer]
                  ?
                  <Option key={i} option={option.title} optionAlphabet={optionAlphabets[i++]} optionNumber={i} setSelectedAnswer={changeAnswer} flag={true} />
                  :
                  <Option key={i} option={option.title} optionAlphabet={optionAlphabets[i++]} optionNumber={i} setSelectedAnswer={changeAnswer} flag={false} />
              ))
            }
          </div>
        </div>
      }
    </>
  )
}
