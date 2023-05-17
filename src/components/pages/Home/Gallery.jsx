import React from 'react';
import img1 from '../../../assets/images/Gallery1.png'
import img2 from '../../../assets/images/Gallery2.png'
import img3 from '../../../assets/images/Gallery3.png'

const Gallery = () => {
    return (
        <div>

            <div className='border-b-4 border-red-400 mx-96'>

            <h1 className='text-center text-3xl font-bold border-b-2 my-2'>Kiddo Gallery</h1>

            </div>

            <div className='grid lg:grid-cols-3 my-5'>
                <img className='w-72' src= {img1} alt="" />
                <img className='w-72' src= {img2} alt="" />
                <img className='w-72' src= {img3} alt="" />



            </div>
            


        </div>
    );
};

export default Gallery;