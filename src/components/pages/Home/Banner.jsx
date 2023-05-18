import React from 'react';
import banne1 from '../../../assets/images/classroom-education-child-care-mathematics-school-kids-1419cd4022967ba81fec4cac4b9c336f.png'
import banne2 from '../../../assets/images/banner2.png'
import banne3 from '../../../assets/images/banner3.png'
import mathkid from '../../../assets/images/mathKid.png'
import mathkid1 from '../../../assets/images/mathKid1.png'
import engineerKid from '../../../assets/images/engineerKid2.png'

const Banner = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-3 gap-5'>

        <div className='flex col-span-2  items-center bg-pink-200'>


          <img className='w-1/2 ' src={banne2} alt="" />
          <div className='p-2'>

          <h1 className='font-bold text-4xl mb-5'>  Discover Educational Toys: <span className='text-red-500'>Learning Made Fun!</span></h1>
          <p>Unlock your child's potential with our educational toys. Spark curiosity and ignite a love for learning through play.</p>


          </div>

        </div>

        <div className='space-y-5'>

         <div className='flex justify-evenly bg-green-200 rounded-lg h-40 items-center p-3'>
          <img className='h-full' src= {mathkid} alt="" />
          <h1 className='text-2xl font-extrabold text-'>Scientist Toys</h1>








         </div>
         <div className='flex justify-evenly bg-pink-300 rounded-lg h-40 items-center p-3'>
          <img className='h-full' src= {mathkid1} alt="" />
          <h1 className='text-2xl font-bold'> Math Toys</h1>








         </div>
         <div className='flex justify-evenly bg-red-300 rounded-lg h-40 items-center p-3'>
          <img className='h-full' src= {engineerKid} alt="" />
          <h1 className='text-2xl font-bold'>Engineer Toys</h1>








         </div>
        </div>

        <div>



        </div>
      </div>
    </div>
  );
};

export default Banner;