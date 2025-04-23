import React from 'react'
import { AuthProvider } from "../src/contexts/AuthContext";
import { AppRoutes } from './routes/AppRoutes';
import { Header } from './components';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <AuthProvider>
        <Header />
        <AppRoutes />
        <ToastContainer />
    </AuthProvider>
  )
}
