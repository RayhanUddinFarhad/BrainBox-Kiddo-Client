import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import Shop from './Shop';
import WhychooseUs from './WhychooseUs';
import Testimonal from './Testimonal';
import { useTitle } from '../../hooks/useTitle';

const Home = () => {


    useTitle('Home');
    return (
        <div className='space-y-10 w-full'>
           <Banner></Banner>
           <Shop></Shop>
           <WhychooseUs></WhychooseUs>
           <Testimonal></Testimonal>
            
        </div>
    );
};

export default Home;