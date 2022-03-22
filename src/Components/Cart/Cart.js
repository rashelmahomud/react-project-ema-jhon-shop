import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='cart-site'>
                <h4>Order Summery Here</h4>
                <p>Select items: {cart.length}</p>
                
        </div>
    );
};

export default Cart;