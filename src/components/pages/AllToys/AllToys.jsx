import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {


    const data = useLoaderData ()
    const {user} = useContext(AuthContext)


    const handleSearches = (e) => {
        e.preventDefault();

        const text = e.target.text.value;
        console.log(text);

        fetch (`http://localhost:3000/allToys`)
        .then (res => res.json())
        .then (data => console.log (data))


    }



    return (
        <div>

        <div className='flex justify-center'>
        
        
        <div className="form-control">
          <Form onSubmit={handleSearches} className="input-group">
            <input name='text' type="text" placeholder="Search…" className="input input-bordered" />
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </Form>
        </div>
        </div>
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

export default AllToys;