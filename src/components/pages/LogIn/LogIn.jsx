import { AuthCredential, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";


const LogIn = () => {


    const {logIn, googleLogin} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';




    const handleLogIn = (e) => {

        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;



        logIn (email, password)
        .then ((res) => { 


            const currentUser = res.user;
            navigate (from, { replace: true })



           

            console.log (currentUser)
        })
        .catch (err => console.log (err))







    }

    const handleGoogleLogin = () => { 

        googleLogin ()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            navigate (from, { replace: true })

          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        



    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="button-primary">Login</button>
                            </div>
                            <p>New to here? <Link className='btn-link' to = "/register">Register</Link></p>
                        </Form>

                        <button onClick={googleLogin} className='flex items-center text-center mx-auto p-5 border rounded-lg'>

                            <FcGoogle className='mr-2'></FcGoogle>
                            Continue with google




                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;