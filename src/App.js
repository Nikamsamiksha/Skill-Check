import React from 'react'
import Login from './components/Login'
import { AuthProvider } from "../src/contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
        <Login />
    </AuthProvider>
  )
}
