import React from 'react';
import './Cart.css';
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;

    }
    return (
        <div className='cart-site'>
                <h4>Order Summery Here</h4>
                <p>Select items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: $</p>
                <h4>Grand Total: $</h4>
                <button className='clear-btn'>Clear Cart</button>
                
                <button className='review-btn'>Review Order</button>
                
        </div>
    );
};

export default Cart;