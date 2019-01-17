import React from 'react';

import classes from './Item.css';
import Button from '../../../Common/UI/Button/Button';


const item = (props) => {
    return (
        <div className={classes.Item}>
            <img src={props.img} alt={props.id} style={{height: "240px", width: "200px"}}/>
            <div>
                <div>{props.name}</div>
                <div>{props.price} $</div>
                <Button text="+ CART" clicked={props.addToCart}/>
            </div>

        </div>
    );
};

export default item;
