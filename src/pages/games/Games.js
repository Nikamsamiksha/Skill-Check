import React from 'react'
import { Link } from 'react-router-dom'
import tic_tac_toe from '../../assets/tic-tac-toe.png';
import maths_game from '../../assets/maths-game.png';

export const Games = () => {
    return (
        <main className='mt-80'>
            <div className='lg:mt-32 flex flex-col lg:flex-row px-5 lg:px-0'>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
                    <Link to="/tic-tac-toe" className='flex justify-center'>
                        <img
                            className="rounded-t-lg h-32 lg:h-44 m-5"
                            src={tic_tac_toe}
                            alt="Tic Tac Toe"
                        />
                    </Link>
                    <hr />
                    <div className="p-2 py-3">
                        <Link to="/">
                            <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Tic Tac Toe</h5>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
                    <Link to="/maths-game" className='flex justify-center'>
                        <img
                            className="rounded-t-lg h-32 lg:h-44 m-5"
                            src={maths_game}
                            alt="Maths Game"
                        />
                    </Link>
                    <hr className=''/>
                    <div className="p-2 py-3">
                        <Link to="/">
                            <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Maths Game</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
