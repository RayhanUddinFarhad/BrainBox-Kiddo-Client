import React from 'react';
import kids from '../../../assets/images/somekids.png'
import sun from '../../../assets/images/sunBackGround.png'
import { FaDonate, FaHeadphones, FaMoneyBill, FaTruck } from 'react-icons/fa';


const WhychooseUs = () => {
    return (
        <div  className='grid lg:grid-cols-2 gap-10 bg-sky-50 p-5'>


            <div data-aos="fade-right" data-aos-duration="2000"  >
                <img src= {kids} alt="" />



            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className='space-y-5'>

                <h1 className='text-3xl font-bold'>Why You choose us?</h1>


                <div className='flex items-center space-x-5'>

                    <div className='bg-yellow-500 p-3 rounded-xl'>

                    <FaHeadphones className=' text-white'></FaHeadphones>

                    </div>


                    <div>

                        <h1 className='font-bold'>24/7 Hours Support</h1>
                        <p>We will suport you 24 hours</p>
                    </div>


                </div>


                <div className='flex items-center space-x-5'>

                    <div className='bg-blue-500 p-3 rounded-xl'>

                    <FaTruck className=' text-white'></FaTruck>

                    </div>


                    <div>

                        <h1 className='font-bold'>Free shipping</h1>
                        <p>We provide free shipping</p>
                    </div>


                </div>

                
                <div className='flex items-center space-x-5'>

                    <div className='bg-blue-900 p-3 rounded-xl'>

                    <FaDonate className=' text-white'></FaDonate>

                    </div>


                    <div>

                        <h1 className='font-bold'>Money Return</h1>
                        <p>30 days money return policy</p>
                    </div>


                </div>
                <div className='flex items-center space-x-5'>

                    <div className='bg-red-500 p-3 rounded-xl'>

                    <FaMoneyBill className=' text-white'></FaMoneyBill>

                    </div>


                    <div>

                        <h1 className='font-bold'>Flexible Payment</h1>
                        <p>30 days money return policy</p>
                    </div>


                </div>
            </div>
            
        </div>
    );
};

export default WhychooseUs;