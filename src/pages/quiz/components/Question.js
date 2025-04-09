import React, { useEffect, useState } from 'react'
import { QuestionText } from './QuestionText'
import { Option } from './Option';

export const Question = ({ question, handleAnswerChange, largeImage = false }) => {
  const optionAlphabets = ["A", "B", "C", "D"];
  const [selectedAnswer, setSelectedAnswer] = useState(5);

  useEffect(() => {
    setSelectedAnswer(5);
  }, [question]);

  const hasOptionTitles =
    question &&
    question.options &&
    question.options.every(opt => typeof opt.title === "string" && opt.title.trim() !== "");

  const hasOptionImages =
    question &&
    question.options &&
    question.options.every(opt => typeof opt.image === "string" && opt.image.trim() !== "");

  // Construct prompt dynamically
  let prompt = question?.title || "";

  if (hasOptionTitles) {
    prompt +=
      " Option A " + question.options[0].title +
      " Option B " + question.options[1].title +
      " Option C " + question.options[2].title +
      " Option D " + question.options[3].title;
  } else if (hasOptionImages) {
    prompt += " Option A Option B Option C Option D";
  }

  const changeAnswer = (e, value) => {
    setSelectedAnswer(value);
    handleAnswerChange(e, value);
  }

  const classNames = largeImage ? "questions w-full" : "questions w-full lg:w-9/12 lg:pr-5";

  let i = 0;
  return (
    <>
      {
        question &&
        <div className={classNames}>
          <QuestionText
            title={question.title}
            prompt={prompt}
            image_url={question.image}
            largeImage={largeImage}
          />

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
