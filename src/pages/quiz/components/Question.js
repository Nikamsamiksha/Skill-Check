import React, { useEffect, useState } from 'react'
import { QuestionText } from './QuestionText'
import { Option } from './Option';

export const Question = ({ question, handleAnswerChange, largeImage = false }) => {
  const optionAlphabets = ["A", "B", "C", "D"];
  let i = 0;
  const [selectedAnswer, setSelectedAnswer] = useState(5);

  useEffect(() => {
    setSelectedAnswer(5)
  }, [question]);

  const changeAnswer = (e, value) => {
    setSelectedAnswer(value);
    handleAnswerChange(e, value);
  }

  const classNames = largeImage ? "questions w-full" : "questions w-full lg:w-9/12 lg:pr-5";
  return (
    <>
      {
        question &&
        <div className={classNames}>
          {
            question.image ?
              <QuestionText title={question.title} image_url={question.image} largeImage={largeImage} />
              :
              <QuestionText title={question.title} />
          }

          <div className='my-5'>
            {
              question && question.options.map(option => (
                option === question.options[selectedAnswer]
                  ?
                  (
                    option.image ?
                    <Option key={i} option={option.title} optionAlphabet={optionAlphabets[i++]} optionNumber={i} setSelectedAnswer={changeAnswer} flag={true} image={option.image}/>
                    :
                    <Option key={i} option={option.title} optionAlphabet={optionAlphabets[i++]} optionNumber={i} setSelectedAnswer={changeAnswer} flag={true} />
                  )
                  :
                  (
                    option.image ?
                    <Option key={i} option={option.title} optionAlphabet={optionAlphabets[i++]} optionNumber={i} setSelectedAnswer={changeAnswer} flag={false} image={option.image}/>
                    :
                    <Option key={i} option={option.title} optionAlphabet={optionAlphabets[i++]} optionNumber={i} setSelectedAnswer={changeAnswer} flag={false} />
                  )

              ))
            } 
          </div>
        </div>
      }
    </>
  )
}
