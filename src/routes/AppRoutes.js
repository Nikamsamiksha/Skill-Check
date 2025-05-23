import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Essays, Games, Home, Login, MathsGame, Quiz, Score, SignUp, TicTacToe, VideoPage, Videos } from '../pages'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/:subject" element={<Videos />} />
            <Route path="/video/:subject/:id" element={<VideoPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz/:subject/:id" element={<Quiz />} />
            <Route path="/result/:subject/:id" element={<Score />} />
            <Route path="/games" element={<Games />}/>
            <Route path='/essays' element={<Essays />} />
            <Route path='/tic-tac-toe' element={<TicTacToe />} />
            <Route path='/maths-game' element={<MathsGame />} />
        </Routes>
    )
}