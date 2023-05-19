import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LottiePlayer } from 'lottie-react';
import Loader from '../shared/Loader';

const PrivateRoutes = ({children, loader}) => {

    const location = useLocation ()
    const {user} = useContext(AuthContext)


if (!user) {

toast("You have to log in first to view details")


}

if (loader) {


  return <Loader></Loader>
}

    if (user) {

        return children;
     }

     

        



        
        
        <Navigate state={{from : location}} to = '/login' replace></Navigate>


        
       


   
};

export default PrivateRoutes;