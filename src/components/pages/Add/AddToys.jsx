import React, { useContext, useState } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';

const AddToys = () => {


    const { user } = useContext(AuthContext)
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const handleSubCategoryChange = (event) => {
        setSelectedSubCategory(event.target.value);
    };




    const handleAdd = (e) => {


        e.preventDefault();

        const form = e.target
        const name = form.Toyname.value;
        const photo = form.photo.value;
        const Sellername = form.sellername.value;
        const selleremail = form.selleremail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const allFields =  {
            name, photo, Sellername, selleremail, price, rating, quantity, description,
             selectedSubCategory

        
        }

        console.log (allFields)


        fetch (`http://localhost:3000/allToys`, {

        method : 'POST',

        headers : {

            'content-type': 'application/json'
        },

        body : JSON.stringify(allFields)
    
        })
        .then (res => res.json())
        .then (data => {console.log(data)

            if (data.insertedId) {

                Swal.fire(
                    'Good job!',
                    'Data added successFull!',
                    'success'
                  )
            }

            e.target.reset()
        
        
        
        })


        

        
    }
    return (
        <div>

            <div className='w-full'>


                <div className='mx-auto card w-[1140px] shadow-sm bg-base-100 my-20 '>



                    <Form onSubmit={handleAdd} className='card-body space-y-10'>



                        <div className='flex space-x-5'>







                            <input type="text" name='Toyname' placeholder="Toy Name"  className="input w-full" />
                            <input type="text" name='photo' placeholder="Picture URL of the toy" className="input w-full" />


                        </div>


                        <div className='flex space-x-5'>







                            <input type="text" defaultValue={user?.displayName} name='sellername' placeholder="seller name" className="input w-full" />
                            <input type="text" name='selleremail' placeholder="email" defaultValue={user?.email} disabled className="input w-full" />

                        </div>




                        <div className='flex space-x-5'>





                            <select value={selectedSubCategory} onChange={handleSubCategoryChange} className="select select-bordered w-full  ">
                                <option  selected>Sub Category</option>
                                <option selected value="science">Science Toys</option>
                                <option value="math">Math Toys</option>
                                <option value="engineer">Engineer Toys</option>
                            </select>



                        </div>

                        <div className='flex space-x-5'>







                            <input type="text" name='price' placeholder="Price" className="input w-full" />
                            <input type="text" name='rating' placeholder="Rating" className="input w-full" />

                        </div>


                        <div className='flex space-x-5'>







                            <input type="text" name='quantity' placeholder="Quantity" className="input w-full" />
                            <input type="text" name='description' placeholder="Description" className="textarea textarea-bordered textarea-lg w-full " />

                        </div>



                        <button className='button-primary'>

                           Add Toy
                        </button>






                    </Form>






                </div>
            </div>

        </div>
    );
};

export default AddToys;