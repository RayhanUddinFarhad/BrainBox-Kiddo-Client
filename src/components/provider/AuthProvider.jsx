import React, { Children, createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext  (null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState (null)




    const register = (email, password) => {


      return  createUserWithEmailAndPassword (auth,  email,  password)
    }


    const logIn = (email, password) => { 


        return signInWithEmailAndPassword (auth, email, password)
    }

    const logOut = () => {


        return signOut (auth)
    }



    useEffect (() => {

        const unsubscribe = onAuthStateChanged  (auth, currentUser => {


            setUser (currentUser)
        })

        return () => unsubscribe()


       
    }, [])

    const contextInfo = {

        user,

        register, 
        logIn,
        logOut
    }






    return (
        <AuthContext.Provider value={contextInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;