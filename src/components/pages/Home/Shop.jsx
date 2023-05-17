import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopItems from './ShopItems';

const Shop = () => {

    const [category, setCategory] = useState([])


    const handleTabClick = (category) => { 


        fetch (`https://brainbox-kiddo-server.vercel.app/toys/${category}`)
        .then (res => res.json())
        .then (data => setCategory (data))




    }









    return (
        <>
         <div className='border-b-4 border-red-400 mx-96'>

<h1 className='text-center text-3xl font-bold my-5'> Kiddo Shops</h1>

</div>

        <div className='flex justify-around'>
  <Tabs className= 'space-y-10 my-5'>
    <TabList className= 'flex justify-center space-x-10 tabs tabs-boxed'>
      <Tab  onClick={() => handleTabClick('science')} className= "button-primary">Science Toys</Tab>
      <Tab onClick={() => handleTabClick ('math')} className= "button-primary"> Math Toys</Tab>
      <Tab onClick={() => handleTabClick ('engineering')} className= "button-primary"> Engineering Toys</Tab>
    </TabList>

    <TabPanel className= "grid lg:grid-cols-3 gap-5">
      {

        category.map (category => <ShopItems key={category._id} data={category}></ShopItems>)
      }
    </TabPanel>
    <TabPanel className= "grid lg:grid-cols-3 gap-5">
    {

category.map (category => <ShopItems key={category._id} data={category}></ShopItems>)
}    </TabPanel>
    <TabPanel className= "grid lg:grid-cols-3 gap-5">
    {

category.map (category => <ShopItems key={category._id} data={category}></ShopItems>)
}    </TabPanel>
  </Tabs>        </div>
        </>
    );
};

export default Shop;