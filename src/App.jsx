import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/pages/Home/Home'
import Navbar from './components/shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/shared/Footer'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>

      <Navbar></Navbar>
      <div className='border '>

      <Outlet></Outlet>

      </div>

      <Footer></Footer>
      <ToastContainer></ToastContainer>

      

     




    </div>
    </>
  )
}

export default App
