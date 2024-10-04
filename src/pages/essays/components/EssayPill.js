import React from 'react'

export const EssayPill = ({ n, flag, i, setCurrentEssay }) => {
  return (
    <>
      {
        flag ?
          <button
            onClick={() => setCurrentEssay(i - 1)}
            className='bg-primary-400 rounded-full inline m-2 lg:m-0 px-3 py-1 lg:py-3 lg:px-5 lg:my-5 lg:mr-10 lg:text-xl cursor-pointer'>
            {n}
          </button>
          :
          <button
            onClick={() => setCurrentEssay(i - 1)}
            className='bg-primary-500 rounded-full inline m-2 lg:m-0 px-3 py-1 lg:py-3 lg:px-5 lg:my-5 lg:mr-10 lg:text-xl cursor-pointer'>
            {n}
          </button>
      }
    </>

  )
}
