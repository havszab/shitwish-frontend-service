import React from 'react';

import classes from './Footer.css';
import FooterItems from './FooterItems/FooterItems';

const footer = () => {
    return (
        <div className={classes.Footer}>
            <nav>
                <FooterItems/>
            </nav>
        </div>
    );
};

export default footer;
