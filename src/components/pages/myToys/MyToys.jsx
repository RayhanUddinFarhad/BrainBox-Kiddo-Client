import React, { useContext, useEffect, useState } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import Toy from './Toy';
import { AuthContext } from '../../provider/AuthProvider';
import MyToy from './MyToy';
import Swal from 'sweetalert2';
import { useTitle } from '../../hooks/useTitle';

const MyToys = () => {

    const {user} = useContext(AuthContext)
    const [data, setData] = useState([])

    useTitle('My Toys')



    useEffect (() => { 


      fetch (`https://brainbox-kiddo-server.vercel.app/allToys/${user?.email}`)
      .then (res => res.json())
      .then (data =>setData (data))

    }, [])




    const handleLowestPrice = () => {


      fetch (`https://brainbox-kiddo-server.vercel.app/lowest/${user?.email}`)
      .then (res => res.json())
      .then (data => setData (data))
    }
    const handleHighestPrice = () => {


      fetch (`https://brainbox-kiddo-server.vercel.app/highest/${user?.email}`)
      .then (res => res.json())
      .then (data => setData (data))
    }


    

    





    return (
        <div>


          <div className='flex justify-center my-10 space-x-5'>

            <button onClick={handleLowestPrice} className='button-primary'>Lowest  Price</button>
            <button onClick={handleHighestPrice} className='button-secondary'>Highest Price</button>




          </div>


<div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          Picture
        </th>
        <th>Toy Name</th>
        <th>Seller Name</th>
        <th>Seller Email</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Quantity</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        data && data.map (data => <MyToy   key={data._id} data = {data} setData = {setData} ></MyToy>)
      }
      
      {/* row 2 */}
      
</tbody>    
  </table>
</div> </div>
    );
};

export default MyToys;