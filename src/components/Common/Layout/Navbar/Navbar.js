import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../Logo/Logo';
import classes from './Navbar.css'


const navbar = () => (
        <div className={classes.Navbar}>
            <ul>
                <li><Link to={'/'}/><Logo/></li>
                <li><Link to={'/sell-item'}>SELL</Link></li>
                <li><Link to={'/cart'}>CART</Link></li>
                <li><Link to={'/login'}>LOGIN</Link></li>
                <li><Link to={'/login'}>LOGOUT</Link></li>
            </ul>
        </div>
    );

export default navbar;