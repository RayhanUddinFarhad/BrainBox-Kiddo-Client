import React, { Children, createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext  (null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState (null)




    const register = (email, password) => {


      return  createUserWithEmailAndPassword (auth,  email,  password)
    }



    useEffect (() => {

        const unsubscribe = onAuthStateChanged  (auth, currentUser => {


            setUser (currentUser)
        })

        return () => unsubscribe()


       
    }, [])

    const contextInfo = {

        user,

        register
    }






    return (
        <AuthContext.Provider value={contextInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;