import React from 'react'
import { Link } from 'react-router-dom'
import tic_tac_toe from '../../assets/tic-tac-toe.png';
import maths_game from '../../assets/maths-game.png';

export const Games = () => {
    return (
        <main className='mt-80'>
            <Link to={`/`}>
                <button
                    className="lg:mt-5 bg-primary-100 px-3 py-2.5 rounded-lg my-3"
                >
                    Back To Home
                </button>
            </Link>
            <div className='flex flex-col lg:flex-row px-5 lg:px-0 justify-start space-x-5'>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/tic-tac-toe" className='flex justify-center'>
                        <img
                            className="rounded-t-lg h-32 lg:h-44 m-5"
                            src={tic_tac_toe}
                            alt="Tic Tac Toe"
                        />
                    </Link>
                    <hr />
                    <div className="p-2 py-3">
                        <Link to="/tic-tac-toe">
                            <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Tic Tac Toe</h5>
                            <p className='text-md text-gray-900 text-center'>
                                A fun and interactive computerized version of the classic Tic-Tac-Toe game, designed specifically for young children. Kids can play against the computer, helping them develop logical thinking and strategic planning skills.
                            </p>
                        </Link>

                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/maths-game" className='flex justify-center'>
                        <img
                            className="rounded-t-lg h-32 lg:h-44 m-5"
                            src={maths_game}
                            alt="Maths Game"
                        />
                    </Link>
                    <hr />
                    <div className="p-2 py-3">
                        <Link to="/maths-game">
                            <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Maths Game</h5>
                        </Link>
                        <p className='text-md text-gray-900 text-center'>
                            An engaging math game that generates random arithmetic questions using addition, subtraction, multiplication, and division with 1- to 2-digit numbers. It can include multiple-choice answers or direct input to enhance learning through practice.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
