import React from 'react'

export const TicTacToe = () => {
    return (
        <main className=''>
            <div className='box-border p-5 rounded-xl mx-auto my-28 w-[550px] h-[550px] bg-primary-400 shadow-lg'>
                <div className='flex justify-center'>
                    <div className='p-2 bg-black shadow-lg text-games-300 text-center games-font text-xl w-64'>TIC TAC TOE</div>
                </div>
                <div className='flex flex-row justify-center mx-auto my-5'>
                    <div className='flex flex-col'>
                        <div className="w-[85px] h-[85px] border border-black rounded-md cursor-pointer shadow-xs bg-games-100"></div>
                        <div className="w-[85px] h-[85px] border border-black rounded-md cursor-pointer shadow-xs bg-games-100"></div>
                        <div className="w-[85px] h-[85px] border border-black rounded-md cursor-pointer shadow-xs bg-games-100"></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="w-[85px] h-[85px] border border-black rounded-md cursor-pointer shadow-xs bg-games-100"></div>
                        <div className="w-[85px] h-[85px] border border-black rounded-md cursor-pointer shadow-xs bg-games-100"></div>
                        <div className="w-[85px] h-[85px] border border-black rounded-md cursor-pointer shadow-xs bg-games-100"></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="w-[85px] h-[85px] border border-black rounded-md cursor-pointer shadow-xs bg-games-100"></div>
                        <div className="w-[85px] h-[85px] border border-black rounded-md cursor-pointer shadow-xs bg-games-100"></div>
                        <div className="w-[85px] h-[85px] border border-black rounded-md cursor-pointer shadow-xs bg-games-100"></div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div id="information" className="text-center self-center w-full bg-games-200 h-12 shadow-xl rounded-lg my-2 p-2 text-xl games-font">Click on approriate position!</div>
                    <div id="startstop" className="text-center bg-games-400 shadow-xl my-2 h-12 rounded-lg p-2 text-xl games-font w-40 cursor-pointer">Start Game</div>
                </div>
                <div className='flex flex-row my-1 justify-between'>
                    <div id="playerX" className="text-center shadow-xl bg-games-300 p-2 w-40 rounded-lg games-font text-lg">Player X</div>
                    <div id="playerO" className="text-center shadow-xl bg-games-300 p-2 w-40 rounded-lg games-font text-lg">Player O</div>
                </div>
                <div id="gameover" className="text-center"></div>
            </div>
        </main>
    )
}