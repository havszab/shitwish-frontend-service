import React from 'react';

import Logo from '../../../../assets/images/tempLogo.png'
import classes from './Logo.css';


const logo = () => {
    return (
            <div className={classes.Logo}>
                <img src={Logo} alt="ShitWishLogo"/>
            </div>
    );
};

export default logo;
