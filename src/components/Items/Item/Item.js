import React from "react";
import classes from "./Item.css"

const item = (props) => (
    <div className={classes.Item}>
        <div><img src={props.src} style={{height: "25px", width: "25px"}} alt="" /></div>
        <div>{props.name}</div>
        <div>{props.price}$</div>
        <div><button onClick={props.click}>Remove</button></div>
    </div>
);

export default item;
