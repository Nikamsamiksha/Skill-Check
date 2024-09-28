import React from 'react'

export const MathsGame = () => {
  return (
    <main>
      <div className='box-border p-6 rounded-xl mx-auto my-28 w-[650px] h-[500px] bg-primary-500 shadow-lg'>
        <div className='flex flex-row justify-end my-2'>
          <div id="score" className='bg-primary-300 p-2 rounded-lg shadow-lg text-lg'>Score: <span id="scoreValue"></span></div>
        </div>
        <div className='flex justify-center'>
          <div id="question" className="bg-primary-50 text-center w-[450px] h-[150px] shadow-xl my-2 rounded-lg"></div>
        </div>
        <div className='flex justify-center'>
          <div id="question" className="bg-primary-10 py-3 text-center w-[450px] h-[50px] shadow-xl my-2 rounded-lg text-xl">Click on the correct answer!</div>
        </div>
        <div className='flex justify-center'>
          <div id="choices" className='flex justify-between w-[450px] h-[100px] my-2'>
            <div id="box1" className="bg-white w-[90px] h-[90px] options box text-center rounded-lg"></div>
            <div id="box2" className="bg-white w-[90px] h-[90px] options box text-center rounded-lg"></div>
            <div id="box3" className="bg-white options w-[90px] h-[90px] box text-center rounded-lg"></div>
            <div id="box4" className="bg-white options w-[90px] h-[90px] box text-center rounded-lg"></div>
          </div>
        </div>
        <div className='flex justify-center'>
          <button id="startstop" className="bg-primary-20 p-3 text-center rounded-lg shadow-lg text-lg">Start Game</button>
        </div>
        <div id="gameover" className="text-center"></div>
      </div>
    </main>
  )
}