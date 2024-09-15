import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Games, Home, Login, Quiz, Score, SignUp, VideoPage, Videos } from '../pages'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/subject" element={<Videos />} />
            <Route path="/video/:id" element={<VideoPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/score/:id" element={<Score />} />
            <Route path="/games" element={<Games />}/>
        </Routes>
    )
}