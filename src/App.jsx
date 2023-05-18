import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/pages/Home/Home'
import Navbar from './components/shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/shared/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>

      <Navbar></Navbar>
      <div className=''>

      <Outlet></Outlet>

      </div>

      <Footer></Footer>

      

     




    </div>
    </>
  )
}

export default App
