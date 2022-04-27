import React, { useState } from 'react';
import Data from './Data';
import ProductData from './ProductData';

const Productlist = () => {
    const data= Data
    const [productdata]=useState(data)
    return (
        <div>
            {
                productdata.map(product => <ProductData products={product}>  </ProductData>)
            }
            
        </div>
    );
};

export default Productlist;