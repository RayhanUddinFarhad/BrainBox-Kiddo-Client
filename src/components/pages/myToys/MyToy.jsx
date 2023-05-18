import React from 'react';
import { Link } from 'react-router-dom';

const MyToy = ({ data, states }) => {

  const handleDelete = () => {




    fetch(`https://brainbox-kiddo-server.vercel.app/${data._id}`, {

      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        states(data)



      })
  }
  return (

    <tr>

      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={data.photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>

        </div>
      </td>
      <td>
        {data.name}
      </td>
      <td>{data.Sellername}</td>
      <td>{data.selleremail}</td>
      <td>{data.price}</td>
      <td>{data.rating}</td>
      <td>{data.quantity}</td>
      <td>{data.selectedSubCategory}</td>
      <th>
        <Link to={`/update/${data._id}`}>            <button className='button-primary'>Update</button>
        </Link>
        <button onClick={handleDelete} className='btn'>Delete</button>
      </th>
    </tr>

  );
};

export default MyToy;