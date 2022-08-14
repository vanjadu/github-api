import React from 'react'
import './styles/app.sass'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SelectedUser from './pages/SelectedUser'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:id' element={<SelectedUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
