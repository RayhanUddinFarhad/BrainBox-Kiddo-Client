import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import Shop from './Shop';
import WhychooseUs from './WhychooseUs';

const Home = () => {
    return (
        <div className='space-y-10'>
           <Banner></Banner>
           <Gallery></Gallery>
           <Shop></Shop>
           <WhychooseUs></WhychooseUs>
            
        </div>
    );
};

export default Home;