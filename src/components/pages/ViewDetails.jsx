import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaDollarSign, FaStar } from "react-icons/fa";


const ViewDetails = () => {

    const data = useLoaderData()
    return (
        <>
        

     <div className='lg:flex justify-around items-center my-20'>



        <img className='w-1/2 rounded-2xl' src= {data.photo} alt="" />

        <div>

            <h1 className='text-[#b172ce] font-bold text-lg'>Seller : {data.Sellername}</h1>
            <h1 className='text-[#b172ce] font-bold text-lg'>{data.selleremail}</h1>

            <h1 className='text-6xl font-bold my-10'>{data.name}</h1>
            <p className='flex items-center text-lg'> <FaStar className='text-yellow-500'></FaStar> <span className='font-bold text-[#4cb353]'>{data.rating} Rating | {data.quantity} Product Available Now</span></p>

            <p className='text-5xl text-[#d49e45] flex my-5'> Price: <FaDollarSign></FaDollarSign> {data.price} </p>

            <p className='bg-[#ccd3d0] p-5 border-2 border-[#4cb353]'> Description : <br /> {data.description}</p>



        </div>
     </div>
        
        
        </>
    );
};

export default ViewDetails;