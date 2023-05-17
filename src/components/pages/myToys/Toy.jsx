import React from 'react';

const Toy = ({data}) => {
    return (
             <tr>
        <th>{data.Sellername}</th>
        <td>{data.name}</td>
        <td>{data.selectedSubCategory}</td>
        <td>{data.price}</td>
        <td>{data.quantity}</td>
        <button className='button-primary'>View Details</button>
      </tr>
    );
};

export default Toy;