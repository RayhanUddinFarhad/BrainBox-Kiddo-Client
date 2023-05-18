import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({data}) => {





    return (
             <tr>
        <th>{data.Sellername}</th>
        <td>{data.name}</td>
        <td>{data.selectedSubCategory}</td>
        <td>{data.price}</td>
        <td>{data.quantity}</td>
        <Link to = {`/viewDetails/${data._id}`}>        <button className='button-primary'>View Details</button>
</Link>
      </tr>
    );
};

export default Toy;