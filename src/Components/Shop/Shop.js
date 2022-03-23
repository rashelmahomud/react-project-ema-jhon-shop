import React, { useEffect, useState } from 'react';
import { addToDb } from '../../fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);


    // add cart code here
    const [cart, setCart] = useState([]);
    useEffect( () => {


        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    } ,[]);

    // button cart handerler here code
    const cartHundeler = (product) => {
        console.log(product);  
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id)
    }; 

    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                         product={product}
                         cartHundeler = {cartHundeler}   // button haderlery some code
                         
                         ></Product>)
                }
                
            </div>
            <div className="order-summmery">
                <Cart cart={cart}></Cart>
               
            </div>
        </div>
    );
};

export default Shop;