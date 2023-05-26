import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    < >
      <ToastContainer/>
      <Home/>
    </>
  )
}

export default App
