import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShopItems = ({data}) => {
    return (
        <div>
            <div data-aos="zoom-in-up" data-aos-duration="1000" className=" card h-full shadow p-10 rounded-xl">
  <figure><img className='w-52' src= {data.photo}  /></figure>
  <div className="text-center space-y-5 card-body">
    <h2 className="font-bold text-2xl"> {data.name}</h2>
    <h2 className="font-bold text-xl text-red-400"> {data.price}</h2>
    <h2 className='flex items-center justify-center font-bold'> <FaStar className='text-yellow-500'></FaStar>
      {data.rating}</h2>
    
    <div className="card-actions justify-center">

      <Link to={`/viewDetails/${data._id}`}>      <button className="button-primary">View Details</button>
</Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ShopItems;