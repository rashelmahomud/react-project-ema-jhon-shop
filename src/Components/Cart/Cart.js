import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
                <h4>Order Summery Here</h4>
                <p>Select items: {cart.length}</p>
                
        </div>
    );
};

export default Cart;