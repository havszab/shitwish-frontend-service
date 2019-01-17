import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import Logo from '../Logo/Logo';
import classes from './Navbar.css'


const navbar = () => (
        <div className={classes.Navbar}>
            <ul>
                <li><Logo/></li>
                <li><Link to={'/sell-item'} className={classes.NavLink}>SELL</Link></li>
                <li><Link to={'/cart'} className={classes.NavLink}>CART</Link></li>
                <li><Link to={'/login'} className={classes.NavLink}>LOGIN</Link></li>
                <li><Link to={'/login'} className={classes.NavLink}>LOGOUT</Link></li>
            </ul>
        </div>
    );

export default navbar;