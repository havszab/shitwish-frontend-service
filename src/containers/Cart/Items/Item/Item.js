import React from "react";

const item = (props) => (
    <div>
        <div>{props.name}</div>
        <div>{props.price}$</div>
        <div><button onClick={props.click}>Remove</button></div>
    </div>
);

export default item;
