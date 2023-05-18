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
import AllToys from './components/pages/AllToys/AllToys.jsx';
import Update from './components/pages/myToys/Update.jsx';
import PrivateRoutes from './components/Routes/PrivateRoutes.jsx'
import ErrorPage from './components/pages/ErrorPage.jsx';

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
        element : <PrivateRoutes><MyToys></MyToys></PrivateRoutes>,
        loader : () => fetch ('https://brainbox-kiddo-server.vercel.app/allToys')
      },


      {

        path : "/viewDetails/:id",
        element : <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
        loader : ({params}) => fetch (`http://localhost:3000/getone/${params.id}`)
      },

      {

        path : "/allToys",
        element : <AllToys></AllToys>
      },

      {

        path : "/update/:id",
        element : <Update></Update>,
        loader : ({params}) => fetch (`http://localhost:3000/getone/${params.id}`)

      }
    ]
  },

  {

    path : '*',
    element : <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
