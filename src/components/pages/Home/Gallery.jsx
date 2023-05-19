import React from 'react';
import img1 from '../../../assets/images/Gallery1.png'
import img2 from '../../../assets/images/Gallery2.png'
import img3 from '../../../assets/images/Gallery3.png'

const Gallery = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="3000">

            <div  className='border-b-4 border-red-400 lg:mx-96'>

            <h1 className='text-center text-3xl font-bold my-2'>Kiddo Gallery</h1>

            </div>

            <div className='grid lg:grid-cols-4 my-5 mx-5 gap-2'>

                <img className='w-72' src= 'https://www.splashlearn.com/blog/wp-content/uploads/2023/02/best-educational-toys-for-kids-that-all-parents-need-to-know-about.jpeg' alt="" />

                <img className='w-72' src= 'https://www.montessorinature.com/wp-content/uploads/2022/01/Ways-You-Can-Utilize-Toys-to-Help-Kids-Learn-Andrea-Montessori-Academy-Montessori-Nature-15.jpg' alt="" />
                <img className='w-72' src= 'https://www.readabilitytutor.com/wp-content/uploads/2021/12/Toddlers.jpg' alt="" />
                <img className='w-72' src= 'https://lingokids.com/wp-content/uploads/2020/01/children-learning-games.jpg' alt="" />
                <img className='w-72' src= 'https://lingokids.com/wp-content/uploads/2020/01/children-learning-games.jpg' alt="" />
                <img className='w-72' src= 'https://littleonemag.com/wp-content/uploads/2019/05/3036428-min-530x350.jpg' alt="" />
                <img className='w-72' src= 'https://us.123rf.com/450wm/oksix/oksix2102/oksix210200024/163147144-moments-of-misunderstandings-and-conflicts-in-the-childrens-group.jpg?ver=6' alt="" />
                <img className='w-72' src= 'https://www.splashlearn.com/blog/wp-content/uploads/2023/03/how-to-select-the-best-educational-toys-for-kids.jpeg' alt="" />




            </div>
            


        </div>
    );
};

export default Gallery;