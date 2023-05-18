import React, { useContext, useEffect, useState } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import Toy from './Toy';
import { AuthContext } from '../../provider/AuthProvider';

const MyToys = () => {

    const {user} = useContext(AuthContext)
    const [data, setData] = useState([])



    useEffect (() => { 


      fetch (`http://localhost:3000/Toysbyemail/${user?.email}`)
      .then (res => res.json())
      .then (data =>setData (data))

    }, [])


    





    return (
        <div>


<div className="overflow-x-auto">
  <table className="table w-full">
    {/* head*/}
    <thead>
      <tr>
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>View Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {

        data && data.map (data => <Toy data = {data}></Toy>)
      }
      
     
    </tbody>
  </table>
</div>        </div>
    );
};

export default MyToys;