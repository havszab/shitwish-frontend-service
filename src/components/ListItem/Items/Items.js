import React from 'react';

import classes from './Items.css';


const items = (props) => {
    return (
        <div className={classes.Items}>
            {props.children}
        </div>
    );
};

export default items;
