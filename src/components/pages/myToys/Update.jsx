import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';

const Update = () => {

    const data = useLoaderData ()
    console.log (data   )


    

    
    const handleUpdate = (event) => {


        event.preventDefault();

        const form = event.target
        const price = form.price.value
        const quantity = form.quantity.value
        const description = form.description.value
        const all = {
            price, quantity, description
        }

        console.log(all)


        fetch (`http://localhost:3000/getone/${data._id}`, {

        method : 'PUT',

        headers : {
            'content-type': 'application/json'
        },

        body : JSON.stringify(all)

        })
        .then (res => res.json())
        .then (data => console.log(data))

     }


    
    return (
        <div>

        <div className='w-full'>


            <div className='mx-auto card w-[1140px] shadow-sm bg-base-100 my-20 '>



                <Form onSubmit={handleUpdate}  className='card-body space-y-10'>



                   


                   

                   

                    <div className='flex space-x-5'>







                        <input type="text" name='price' defaultValue={data.price} placeholder="Price" className="input w-full" />

                    </div>


                    <div className='flex space-x-5'>







                        <input type="text" defaultValue={data.quantity} name='quantity' placeholder="Quantity" className="input w-full" />
                        <input type="text" defaultValue={data.description} name='description' placeholder="Description" className="textarea textarea-bordered textarea-lg w-full " />

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

export default Update;