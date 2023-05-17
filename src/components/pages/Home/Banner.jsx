import React from 'react';
import banne1 from '../../../assets/images/classroom-education-child-care-mathematics-school-kids-1419cd4022967ba81fec4cac4b9c336f.png'
import banne2 from '../../../assets/images/banner2.png'

const Banner = () => {
    return (
        <div>
           <div className="hero w-full my-10">
  <div className="hero-content flex-col lg:flex-row ">
    <img src= {banne2} className="lg:max-w-md rounded-lg " />
    <div className='w-full'>
      <h1 className="text-4xl font-bold ">Adventure Awaits: <br /> Exploring Learning  with <br /> Brainbox<span className='text-red-400'>Kiddo</span></h1>
      <p className="py-6">Embark on an educational adventure with BrainboxKiddo,   where learning and fun go hand in hand!  Our captivating collection of educational  toys is designed to spark curiosity,  ignite imaginations, and empower children to explore the wonders of knowledge.  From interactive games and brain-teasing puzzles to hands-on experiments and creative building sets, </p>
      <button className="bg-red-400 text-white p-3 rounded-lg">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;