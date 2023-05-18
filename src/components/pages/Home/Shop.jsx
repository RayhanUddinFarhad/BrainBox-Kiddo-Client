import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopItems from './ShopItems';

const Shop = () => {

    const [category, setCategory] = useState([])


    const handleTabClick = (category) => { 


        fetch (`http://localhost:3000/toys/${category}`)
        .then (res => res.json())
        .then (data => {setCategory (data)
        })




    }

    useEffect(() => {
      // Fetch data for the first tab when the component mounts
      handleTabClick('science');
    }, [])









    return (
        <>
         <div className='border-b-2 border-red-400 px-10 mr-52'>

<h1 className='text-left text-3xl font-bold my-5'> <span className='text-red-400'>Kiddo</span> Shops</h1>

</div>

        <div className='flex justify-around'>
  <Tabs className= 'space-y-10 my-5' defaultIndex={0}>
    <TabList className= 'flex justify-center space-x-10 tabs tabs-boxed'>
      <Tab defaultChecked  onClick={() => handleTabClick('science')} >Science Toys</Tab>
      <Tab onClick={() => handleTabClick ('math')} > Math Toys</Tab>
      <Tab onClick={() => handleTabClick ('engineering')} > Engineering Toys</Tab>
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