import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div>
               <a href="/Oder">Order</a>
               <a href="/Oder-review">Order Review</a>
               <a href="/Manage-inventory">Manage Inventory</a>
           </div>
        </nav>
    );
};

export default Header;