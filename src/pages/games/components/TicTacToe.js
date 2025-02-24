import React, { useState } from 'react'
import { Box } from './Box';
import ReactPlayer from 'react-player';

export const TicTacToe = () => {

    const one = [1, 4, 7];
    const two = [2, 5, 8];
    const three = [3, 6, 9];
    const [currentTurn, setCurrentTurn] = useState(null);
    const [gameOver, setGameOver] = useState(null);
    const [winner, setWinner] = useState(null);
    const [isGameStarted, setIsGameStarted] = useState(false);
    let count = 0;

    function writeO() {
        const boxes = document.querySelectorAll(".box");
        let remainingBoxes = [];
        boxes.forEach((box) => {
            if (box.innerHTML === "") {
                remainingBoxes.push(box);
            }
        });
        let random = Math.floor(Math.random() * ((remainingBoxes.length - 1) - 0 + 1)) + 0;
        if (remainingBoxes.length > 0) {
            const div = remainingBoxes[random];
            div.innerHTML = "O";
            count++;
        }
        setTimeout(checkWinner, 1000);
        if(count === 9) {
            setGameOver(true);
        }
        // checkWinner();
        setCurrentTurn("X");
    }

    function writeX(evt) {
        if (isGameStarted) {
            setCurrentTurn("O");
            if (evt.target.innerHTML === "") {
                evt.target.innerHTML = "X";
                count++;
                checkWinner();
                if (winner === null) {
                    setTimeout(writeO, 1000)
                }
            }
        }
    }

    // All possible winning combinations
    const winningCombinations = [
        [1, 2, 3], // Row 1
        [4, 5, 6], // Row 2
        [7, 8, 9], // Row 3
        [1, 4, 7], // Column 1
        [2, 5, 8], // Column 2
        [3, 6, 9], // Column 3
        [1, 5, 9], // Diagonal 1
        [3, 5, 7], // Diagonal 2
    ];

    function checkWinner() {
        for (const [a, b, c] of winningCombinations) {
            const box1 = document.getElementById(a.toString());
            const box2 = document.getElementById(b.toString());
            const box3 = document.getElementById(c.toString());
            if ((box1.innerHTML === "X" && box2.innerHTML === "X" && box3.innerHTML === "X")
                || (box1.innerHTML === "O" && box2.innerHTML === "O" && box3.innerHTML === "O")) {
                showModal(box1.innerHTML);
            }
        }
    }

    function showModal(win) {
        console.log(win, "wins");
        setGameOver(win);
        setWinner(win);
    }

    function clearAll() {
        const boxes = document.querySelectorAll(".box");
        boxes.forEach((box) => {
            box.innerHTML = "";
        });
        setWinner(null);
        setGameOver(null);
        setIsGameStarted(null);
        setCurrentTurn(null);
    }

    function startGame(evt) {
        setIsGameStarted(true);
        setCurrentTurn("X");
    }

    return (
        <main className='overflow-y-visible pt-5'>
            <div className='box-border p-5 rounded-xl mx-auto w-[550px] h-[550px] bg-primary-400 shadow-lg relative '>
                <div className='flex justify-center'>
                    <div className='p-2 bg-black shadow-lg text-games-300 text-center games-font text-xl w-64'>TIC TAC TOE</div>
                </div>
                <div className='flex flex-row justify-center mx-auto my-5'>
                    <div className='flex flex-col'>
                        {
                            one.map((i) => (
                                <Box i={i} writeX={writeX} key={i} />
                            ))
                        }
                    </div>
                    <div className='flex flex-col'>
                        {
                            two.map((i) => (
                                <Box i={i} writeX={writeX} key={i} />
                            ))
                        }
                    </div>
                    <div className='flex flex-col'>
                        {
                            three.map((i) => (
                                <Box i={i} writeX={writeX} key={i} />
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div id="information" className="text-center self-center w-full bg-games-200 h-12 shadow-xl rounded-lg my-2 p-2 text-xl games-font">Click on approriate position!</div>
                    <div
                        id="start"
                        onClick={startGame}
                        className="text-center bg-games-400 shadow-xl my-2 h-12 rounded-lg p-2 text-xl games-font w-40 cursor-pointer"
                    >
                        Start Game
                    </div>
                </div>
                <div className='flex flex-row my-1 justify-between'>
                    {
                        currentTurn === null &&
                        <>
                            <div id="playerX" className="text-center shadow-xl bg-games-300 p-2 w-40 rounded-lg games-font text-lg">Player X</div>
                            <div id="playerO" className="text-center shadow-xl bg-games-300 p-2 w-40 rounded-lg games-font text-lg">Player O</div>
                        </>
                    }
                    {
                        currentTurn === "X" &&
                        <div id="playerX" className="text-center shadow-xl bg-games-300 p-2 w-40 rounded-lg games-font text-lg justify-start">Player X</div>
                    }
                    {
                        currentTurn === "O" &&
                        <div id="playerO" className="text-center shadow-xl bg-games-300 p-2 w-40 rounded-lg games-font text-lg justify-end">Player O</div>
                    }
                </div>
                {
                    gameOver != null &&
                    <div
                        id="gameover"
                        className="bg-gradient-to-b from-[#ffc8dd] to-[#bc4749] text-black text-2xl absolute top-[110px] left-[-15px] z-[9999] text-center items-center justify-between games-font py-10 px-20 shadow-2xl rounded flex flex-row"
                    >
                        <div className='mx-5'>
                            <p className='text-center'>GAME OVER</p>
                            {
                                count === 9 && winner === null ?
                                <p className='text-4xl font-bold'>Its a TIE!</p>
                                :
                                <p className='text-4xl font-bold'>{winner} wins</p>
                            }
                            <div
                                id="stop"
                                onClick={clearAll}
                                className="text-center bg-games-400 shadow-xl rounded-lg p-2 text-xl games-font w-40 cursor-pointer my-2">
                                Restart Game
                            </div>
                        </div>
                        <div className='mx-5 w-[180px]'>
                            {
                                winner === "X" &&
                                <ReactPlayer
                                    url={require("../../../assets/win_animation.mp4")}
                                    width="100%"
                                    height="100%"
                                    playing={true}
                                    loop={true}
                                    controls={false}
                                    muted={true} />
                            }
                            {
                                winner === "O" &&
                                <ReactPlayer
                                    url={require("../../../assets/loose_animation.mp4")}
                                    width="100%"
                                    height="100%"
                                    playing={true}
                                    loop={true}
                                    controls={false}
                                    muted={true} />
                            }
                            {
                                winner === null &&
                                <ReactPlayer
                                    url={require("../../../assets/tie_animation.mp4")}
                                    width="50%"
                                    height="50%"
                                    playing={true}
                                    loop={true}
                                    controls={false}
                                    muted={true} />
                            }
                        </div>
                    </div>
                }
            </div>
        </main>
    )
}