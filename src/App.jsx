import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/pages/Home/Home'
import Navbar from './components/shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/shared/Footer'
import { ToastContainer, toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  

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
