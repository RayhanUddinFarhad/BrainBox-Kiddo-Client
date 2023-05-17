import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/pages/Home/Home.jsx';
import LogIn from './components/pages/LogIn/LogIn.jsx';
import Register from './components/pages/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children : [


      {
        path : "/",
        element : <Home></Home>
      },

      {

        path : "/logIn",
        element : <LogIn></LogIn>
      },

      {
        path : "/register",
        element : <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
