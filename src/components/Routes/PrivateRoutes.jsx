import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoutes = ({children}) => {

    const location = useLocation ()
    const {user} = useContext(AuthContext)


if (!user) {

toast("You have to log in first to view details")


}

    if (user) {

        return children;
     }

     else {

        return <>

        



        
        
        <Navigate state={{from : location}} to = '/login' replace></Navigate>


        
        
        </>
     }



   
};

export default PrivateRoutes;