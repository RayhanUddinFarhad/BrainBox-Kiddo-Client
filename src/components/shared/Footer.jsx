import React from 'react';
import logo from '../../../src/assets/logo.png'
import { FaCopyright, FaFacebook, FaInstagram, FaRegCopyright, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>

            <footer className="footer p-10 bg-neutral  text-white mt-10">
                <div>
                    <div className='flex items-center'>


                        <img className='w-20' src={logo} alt="" />
                        <h4 className='text-3xl font-extrabold'>Brainbox<span className='text-red-400'>Kiddo</span></h4>
                    </div>    
                    <p className='flex items-center'><FaRegCopyright></FaRegCopyright> Copyright 2023 by Rayhan Uddin Farhad</p>
                    <p>Mirpur 11, Dhaka, Bangladesh</p>
                    <p>Mobile : 01791403364</p>
                    <p>Emal : Rayhanuddinfarhad11@gmail.com</p>
                </div>
                <div>
                    <span className="footer-title">Contact With Us</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Find us on social media</span>
                   <div className='flex  space-x-2'>

                   <a href='https://www.facebook.com/md.rayhan.uddin.farhad.7' className='text-3xl text-blue-500'> <FaFacebook></FaFacebook></a>
                    <a href='https://www.instagram.com/rayhanuddinfarhad/' className='text-3xl text-red-500'> <FaInstagram></FaInstagram></a>
                   </div>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>

        </div>
    );
};

export default Footer;