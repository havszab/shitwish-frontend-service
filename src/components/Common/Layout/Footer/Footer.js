import React from 'react';

import classes from './Footer.css';

const footer = () => {
    return (
        <div className={classes.Footer}>
            <ul>
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Contact</li>
                <li></li>
            </ul>
        </div>
    );
};

export default footer;
