import React from 'react';

const ShopItems = ({data}) => {
    return (
        <div>
            <div className="  h-full shadow p-10 rounded-xl">
  <figure><img className='w-52' src= {data.picture}  /></figure>
  <div className="text-center space-y-5">
    <h2 className="font-bold text-2xl"> {data.name}</h2>
    <h2 className="font-bold text-xl text-red-400"> {data.price}</h2>
    
    <div className="card-actions justify-center">
      <button className="button-primary">View Details</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ShopItems;