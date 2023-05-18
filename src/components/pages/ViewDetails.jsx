import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {

    const data = useLoaderData()
    return (
        <div>
            I am {data.name}
        </div>
    );
};

export default ViewDetails;