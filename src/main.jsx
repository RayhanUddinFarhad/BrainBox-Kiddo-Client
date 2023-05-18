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
import AuthProvider from './components/provider/AuthProvider.jsx';
import AddToys from './components/pages/Add/AddToys.jsx';
import MyToys from './components/pages/myToys/MyToys.jsx';
import ViewDetails from './components/pages/ViewDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [


      {
        path: "/",
        element: <Home></Home>
      },

      {

        path: "/logIn",
        element: <LogIn></LogIn>
      },

      {
        path: "/register",
        element: <Register></Register>
      }, 
      {
        path : "/add",
        element : <AddToys></AddToys>
      },

      {

        path : "/myToys",
        element : <MyToys></MyToys>,
        loader : () => fetch ('https://brainbox-kiddo-server.vercel.app/allToys')
      },


      {

        path : "/viewDetails/:id",
        element : <ViewDetails></ViewDetails>,
        loader : ({params}) => fetch (`https://brainbox-kiddo-server.vercel.app/allToys/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
