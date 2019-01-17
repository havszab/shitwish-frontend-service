import React from 'react';

import classes from './Logo.css';
import {Link} from "react-router-dom";


const logo = () => {


    return (
        <Link to={'/'}>
            <div className={classes.Logo}>
                <img src={require('../../../../assets/images/org-Logo.png')} alt="ShitWishLogo"
                     onMouseOver={e => (e.currentTarget.src = require('../../../../assets/images/full-Logo.png'))}
                     onMouseOut={e => (e.currentTarget.src = require('../../../../assets/images/org-Logo.png'))}
                />
            </div>
        </Link>
    );
};

export default logo;
