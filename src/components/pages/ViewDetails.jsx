import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaAt, FaDollarSign, FaStar, FaUser, FaUserAlt, FaVoicemail } from "react-icons/fa";
import { useTitle } from '../hooks/useTitle';


const ViewDetails = () => {

    const data = useLoaderData()

    useTitle('View Details')
    return (
        <>





            <div className="hero">
                <div className="hero-content flex-col lg:flex-row shadow-lg p-5 max-w-max">
                    <img src={data?.photo} className="lg:w-[50%] rounded-lg" />
                    <div className="space-y-5 ">
                        <h1 className="text-5xl font-bold lg:text-5xl md:text-4xl sm:text-3xl">{data?.name}</h1>
                        <h1 className=' font-bold text-lg flex items-center text-red-400'> <FaUserAlt className='mr-5'></FaUserAlt>

                            Seller : {data.Sellername}</h1>
                        <h1 className=' font-bold text-lg flex items-center text-red-400'>
                            <FaAt className='mr-5'></FaAt>

                            {data.selleremail}</h1>
                        <p className="flex items-center text-lg">
                            <FaStar className="text-yellow-500"></FaStar>{" "}
                            <span className="font-bold text-[#4cb353]">{data.rating} Rating</span>
                        </p>
                        <p className="text-lg font-bold text-indigo-400 bg-blue-50 p-5">
                            {data.quantity} Product Available Now
                        </p>
                        <p className="text-5xl text-red-400 flex my-5">
                            Price: <FaDollarSign></FaDollarSign> {data.price}
                        </p>


                        <div className='py-6 space-y-2'>
                            <h1 className='font-bold text-2xl'>Description:</h1>
                            <p className=" ">
                                {data?.description}.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default ViewDetails;