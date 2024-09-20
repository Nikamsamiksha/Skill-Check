import React from 'react'

export const QuestionPill = ({ n }) => {
  return (
    <div className='bg-primary-100 rounded-full inline p-2 lg:p-5 my-2 lg:my-5  lg:mr-10 text-md lg:text-xl cursor-pointer'>
      Q{n}
    </div>
  )
}
