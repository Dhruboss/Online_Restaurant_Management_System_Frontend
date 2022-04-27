import React from 'react';
import { useParams } from 'react-router';
import Data from './Data';

const  ProductDetails = () => {
    const data = Data
    const {id} = useParams();
    return (
        <div style={{textAlign:"center"}}>
            <hr/>
            <p>{data[id-1].name}</p>
            <hr/>
            <p>{data[id-1].price}</p>
            <hr/>
        </div>
    );
};

export default ProductDetails;