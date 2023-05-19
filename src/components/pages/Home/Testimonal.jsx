import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { FaStar } from 'react-icons/fa';


const Testimonal = () => {
    return (
        <div>

            {" "}
            <br />
            <div watchSlidesProgress={true} slidesPerView={3} className="mySwiper grid lg:grid-cols-3 ">

                    <div className='card text-center space-y-5 w-full'>

                        <img className='w-20 mx-auto rounded-full' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <p className='flex justify-center items-center font-bold '> 5 <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>


                        </p>
                        <h1 className='text-xl font-bold'>Sarah</h1>
                        <p>BrainboxKiddo is a fantastic educational toys marketplace! They offer a wide range of toys that make learning fun and engaging</p>




                    </div>




                    <div className='card text-center space-y-5 h-full'>

                        <img className='w-20 mx-auto' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <p className='flex justify-center items-center font-bold '> 5 <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>


                        </p>
                        <h1 className='text-xl font-bold'>John</h1>
                        <p>I highly recommend BrainboxKiddo for educational toys. The quality of their products is excellent, and my kids love playing and learning with them.</p>




                    </div>




                    <div className='card text-center space-y-5'>

                        <img className='w-20 mx-auto' src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <p className='flex justify-center items-center font-bold '> 5 <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>


                        </p>
                        <h1 className='text-xl font-bold'>Michael</h1>
                        <p>BrainboxKiddo has been a game-changer for my child's learning. The toys are educational, interactive, and promote critical thinking skills. A must-visit marketplace!</p>




                    </div>




            </div>

        </div>
    );
};

export default Testimonal;