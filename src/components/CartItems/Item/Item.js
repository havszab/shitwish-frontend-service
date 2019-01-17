import React from "react";
import classes from "./Item.css"

const item = (props) => (
    <div className={classes.Row }>
        <td><div><img src={props.src} style={{height: "25px", width: "25px"}} alt="" /></div></td>
        <td><div>{props.name}</div></td>
        <td><div className={classes.Price}>{props.price}$</div></td>
        <td><button onClick={props.click} className={classes["Button-warning"]}>X</button></td>
    </div>
);

export default item;
