import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { NumberBox } from "./NumberBox";  

// MathsGame Component
export const MathsGame = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let timerId;
    if (isStarted && !isPaused && timeRemaining > 0) {
      timerId = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeRemaining === 0) {
      setGameOver(true);
      setIsStarted(false);
    }

    return () => clearInterval(timerId);
  }, [isStarted, isPaused, timeRemaining]);

  useEffect(() => {
    if (isStarted && !gameOver) {
      generateQA();
    }
  }, [score]); // ✅ Generates a new question ONLY after the score updates

  const generateQA = () => {
    const operators = ["*", "/", "+", "-"];
    const index = Math.floor(Math.random() * operators.length);
    const operator = operators[index];

    let num1 = 1 + Math.floor(Math.random() * 9);
    let num2 = 1 + Math.floor(Math.random() * 9);

    // Avoid division by zero
    if (operator === "/") {
      num2 = 1 + Math.floor(Math.random() * 9);
    }

    let correctAns;
    switch (operator) {
      case "*":
        correctAns = num1 * num2;
        break;
      case "/":
        correctAns = Number((num1 / num2).toFixed(2));
        break;
      case "+":
        correctAns = num1 + num2;
        break;
      case "-":
        correctAns = num1 - num2;
        break;
      default:
        correctAns = num1 + num2;
    }

    setQuestion(`${num1} ${operator} ${num2}`);
    setCorrectAnswer(correctAns);

    // ✅ Place the correct answer at a random position
    const correctPos = Math.floor(Math.random() * 4);
    let answerOptions = new Array(4).fill(null);
    answerOptions[correctPos] = correctAns;

    // ✅ Fill remaining positions with unique wrong answers
    let wrongAnswers = new Set();
    while (wrongAnswers.size < 3) {
      let dummyNum1 = 1 + Math.floor(Math.random() * 99);
      let dummyNum2 = 1 + Math.floor(Math.random() * 99);
      let wrongAns;

      switch (operator) {
        case "*":
          wrongAns = dummyNum1 * dummyNum2;
          break;
        case "/":
          wrongAns = Number((dummyNum1 / dummyNum2).toFixed(2));
          break;
        case "+":
          wrongAns = dummyNum1 + dummyNum2;
          break;
        case "-":
          wrongAns = dummyNum1 - dummyNum2;
          break;
        case "%":
          wrongAns = dummyNum1 % dummyNum2;
          break;
      }

      if (wrongAns !== correctAns && !wrongAnswers.has(wrongAns)) {
        wrongAnswers.add(wrongAns);
      }
    }

    // ✅ Fill empty slots in `answerOptions`
    let i = 0;
    answerOptions = answerOptions.map((item) => (item === null ? [...wrongAnswers][i++] : item));

    setOptions(answerOptions);
  };

  const startGame = () => {
    setIsStarted(true);
    setGameOver(false);
    setScore(0);
    setTimeRemaining(60);
    generateQA();
  };

  const pauseGame = () => {
    setIsPaused(true);
  };

  const resumeGame = () => {
    setIsPaused(false);
  };

  const restartGame = () => {
    setIsStarted(false);
    setGameOver(false);
    setScore(0);
    setTimeRemaining(60);
    setOptions([]);
  };

  const verifyAns = (selectedAnswer) => {
    if (!isStarted) return;

    if (selectedAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <main className="pt-5">
      <div className="box-border p-6 rounded-xl mx-auto w-[650px] h-[500px] bg-primary-500 shadow-lg">
        <div className="flex flex-row justify-between my-2">
          <div className="bg-primary-300 p-2 rounded-lg shadow-lg text-lg">
            Time Remaining: {timeRemaining}s
          </div>
          <div className="bg-primary-300 p-2 rounded-lg shadow-lg text-lg">
            Score: {score}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-primary-50 text-center w-[450px] h-[150px] shadow-xl my-2 rounded-lg py-8 text-8xl">
            {question}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-primary-10 py-3 text-center w-[450px] h-[50px] shadow-xl my-2 rounded-lg text-xl">
            Click on the correct answer!
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-between w-[450px] h-[100px] my-2">
            {options.map((num, index) => (
              <NumberBox key={index} number={num} verifyAns={verifyAns} />
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          {!isStarted && !gameOver && (
            <button onClick={startGame} className="bg-primary-20 p-3 rounded-lg shadow-lg text-lg">
              Start Game
            </button>
          )}
          {isStarted && !isPaused && (
            <button onClick={pauseGame} className="bg-yellow-400 p-3 rounded-lg shadow-lg text-lg">
              Pause
            </button>
          )}
          {isPaused && (
            <button onClick={resumeGame} className="bg-green-400 p-3 rounded-lg shadow-lg text-lg">
              Resume
            </button>
          )}
        </div>

         {gameOver && (
          <div
            className="bg-gradient-to-b from-[#ffc8dd] to-[#bc4749] text-black text-2xl absolute top-[193px] left-[360px] z-[9999] text-center games-font py-10 px-10 shadow-2xl rounded flex flex-col items-center"
          >
            <div className="mx-5 flex items-center justify-between">
              <div className="mx-5 w-[180px]">
                <ReactPlayer
                  url={require("../../../assets/girl_thumbs_up_animation.mp4")}
                  width="100%"
                  height="100%"
                  playing={true}
                  loop={true}
                  controls={false}
                  muted={true}
                />
              </div>
              <div>
                <p className="text-center">GAME OVER</p>
                <p className="text-4xl font-bold">Your Score: {score}</p>
              </div>
              <div className="mx-5 w-[180px]">
                <ReactPlayer
                  url={require("../../../assets/boy_thumbs_up_animation.mp4")}
                  width="100%"
                  height="100%"
                  playing={true}
                  loop={true}
                  controls={false}
                  muted={true}
                />
              </div>
            </div>
            <div
              onClick={restartGame}
              className="text-center bg-games-400 shadow-xl rounded-lg p-2 text-xl games-font w-40 cursor-pointer my-2"
            >
              Restart Game
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
