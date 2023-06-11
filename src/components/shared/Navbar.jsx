import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import useCarts from '../hooks/useCarts';

const Navbar = () => {



    const { user, logOut } = useContext(AuthContext)

    const [carts] = useCarts()

    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(err => {


                console.log(err)
            })




    }

    console.log(user)
    return (
        <div>

            <div className="navbar bg-base-100 my-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link>Home</Link>
                            <Link to="/allToys">All Toys</Link>


                            {

                                user && <>

                                    <Link to="/myToys">My Toys</Link>
                                    <Link to="/add">Add a Toys</Link>

                                </>
                            }
                            <Link to="/blogs">Blogs</Link>
                            <div className="navbar-end" > {

                                user ? <button onClick={handleLogOut} className="bg-[#fdeaee] p-2  font-bold text-red-500 rounded-lg mr-2" >Log Out</button> : <Link to="/logIn" className="button-primary">Log In</Link>

                            }



                                <div className='tooltip flex justify-center' data-tip={user?.displayName}>

                                    <img className='w-14 rounded-full ' src={user?.photoURL} alt="" />
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className='flex items-center'>


                        <img className='w-20' src={logo} alt="" />
                        <h4 className='text-3xl font-extrabold'>Brainbox<span className='text-red-400'>Kiddo</span></h4>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 font-bold  space-x-5">
                        <Link>Home</Link>
                        <Link to="/allToys">All Toys</Link>


                        {

                            user && <>

                                <Link to="/myToys">My Toys</Link>
                                <Link to="/add">Add a Toys</Link>

                            </>
                        }
                        <Link to="/blogs">Blogs</Link>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex mr-5"> {

                    user ? <button onClick={handleLogOut} className="button-secondary" >Log Out</button> : <Link to="/logIn" className="button-primary">Log In</Link>

                }



                    <div className='tooltip mr-10' data-tip={user?.displayName}>

                        <img className='w-14 rounded-full ' src={user?.photoURL} alt="" />
                    </div>           
                    <Link to = "carts" className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{carts.length || 0}</span>
        </Link>
                    
                    
                    
                         </div>
            </div>

        </div>
    );
};

export default Navbar;