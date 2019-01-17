import React from "react";
import classes from "./Item.css"

const item = (props) => (
    <div className={classes.Item}>
        <div><img src={props.src} style={{height: "25px", width: "25px"}} alt="" /></div>
        <div>{props.name}</div>
        <div className={classes.Price}>{props.price}$</div>
        <button onClick={props.click} className={classes["Button-warning"]}>X</button>
    </div>
);

export default item;
