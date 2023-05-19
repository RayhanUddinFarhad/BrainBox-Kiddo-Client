import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShopItems = ({data}) => {
    return (
        <div>
            {/* <div  className=" card h-full shadow p-10 rounded-xl">
  <figure><img className='w-52' src= {data.photo}  /></figure>
  <div className="text-center space-y-5 card-body">
    <h2 className="font-bold text-2xl"> {data.name}</h2>
    <h2 className="font-bold text-xl text-red-400"> {data.price}</h2>
    <h2 className='flex items-center justify-center font-bold'> <FaStar className='text-yellow-500'></FaStar>
      {data.rating}</h2>
    
    <div className="card-actions justify-end">

      <Link to={`/viewDetails/${data._id}`}>      <button className="bg-indigo-50 text-indigo-500 p-2 rounded-lg font-bold">View Details</button>
</Link>
    </div>
  </div>
</div>
             */}



<div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden h-full">
  <img className="w-full h-48 object-cover" src= {data.photo} alt="Toy Image" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{data.name}</div>
    <p className="text-gray-700 text-base">${data.price}</p>
    <div className="flex items-center mt-4">
     <FaStar className='text-yellow-500'></FaStar>
      <p className="text-gray-700">4.5</p>
    </div>
  </div>
  <div className="px-6 py-4">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      View Details
    </button>
  </div>
</div>

        </div>
    );
};

export default ShopItems;