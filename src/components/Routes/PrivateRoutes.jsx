import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoutes = () => {

    const location = useLocation ()




    if (user) {

        return children
     }
     return <Navigate state={{from : location}} to = '/login' replace></Navigate>

    return (
        <div>


            
        </div>
    );
};

export default PrivateRoutes;