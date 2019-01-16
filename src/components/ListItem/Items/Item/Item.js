import React from 'react';

import classes from './Item.css';


const item = (props) => {
    return (
        <div className={classes.Item}>
            <img src={props.img} alt={props.id} style={{height: "240px", width: "200px"}}/>
            <div>{props.name}</div>
            <div>{props.price} $</div>
        </div>
    );
};

export default item;
