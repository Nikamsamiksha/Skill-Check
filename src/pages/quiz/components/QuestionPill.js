import React from 'react'

export const QuestionPill = ({ n }) => {
  return (
    <div className='bg-primary-100 rounded-full inline p-5 my-5 mr-10 text-xl cursor-pointer'>
      Q{n}
    </div>
  )
}
