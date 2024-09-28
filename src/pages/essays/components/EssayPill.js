import React from 'react'

export const EssayPill = ({ n, flag, i, setCurrentEssay }) => {
  return (
    <>
      {
        flag ?
          <button
            onClick={() => setCurrentEssay(i - 1)}
            className='bg-primary-400 rounded-full inline py-3 px-5 my-5 mr-10 text-xl cursor-pointer'>
            {n}
          </button>
          :
          <button
            onClick={() => setCurrentEssay(i - 1)}
            className='bg-primary-500 rounded-full inline py-3 px-5 my-5 mr-10 text-xl cursor-pointer'>
            {n}
          </button>
      }
    </>

  )
}
