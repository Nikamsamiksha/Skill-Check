import React from 'react'
import { AuthProvider } from "../src/contexts/AuthContext";
import { AppRoutes } from './routes/AppRoutes';

export default function App() {
  return (
    <AuthProvider>
        <AppRoutes />
    </AuthProvider>
  )
}
