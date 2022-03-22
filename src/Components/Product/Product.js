import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


import './product.css';

const Product = (props) => {
    // console.log(props);
    const {img,name,price,seller,ratings} = props.product;

    return (
        <div className='product'>
            <div className='product-box'>
            <img src={img} alt="" />
            <h2 className='product-name'>{name}</h2>
            <strong>Price: ${price}</strong>
            <h5>Manufacturer :{seller}</h5>
            <p>Rating :{ratings} start</p>
            </div>
            <button onClick={() => props.cartHundeler(props.product)} className='product-btn'>Add to Cart   <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></button>
          
        </div>
        
    );
};

export default Product;