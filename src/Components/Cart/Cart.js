import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    };
    const tax = total* 10/100;
    const final = total + shipping + tax;
    return (
        <div className='cart-site'>
                <h4>Order Summery Here</h4>
                <p>Select items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${final.toFixed(2)}</h4>
                <button className='clear-btn'>Clear Cart  
                <FontAwesomeIcon className='clear-icon' icon={faTrash}></FontAwesomeIcon>
                 </button>
                
                <button className='review-btn'>Review Order
                <FontAwesomeIcon className='clear-icon' icon={faArrowRight}></FontAwesomeIcon>
                </button>
                
        </div>
    );
};

export default Cart;