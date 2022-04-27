import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Head from './Head';

const ProductData = (props) => {
    const {id,name,price}=props.products

    return (
        
        <div>
             <Head/>
        <Link to ={"/productlist/"+id} className="productlist">
            <p>{name}</p>
            <p>{price}</p>
        </Link>
        </div>
    );
};

export default ProductData;