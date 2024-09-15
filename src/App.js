import React from 'react'
import { AuthProvider } from "../src/contexts/AuthContext";
import { AppRoutes } from './routes/AppRoutes';
import { Header } from './components';

export default function App() {
  return (
    <AuthProvider>
        <Header />
        <AppRoutes />
    </AuthProvider>
  )
}
