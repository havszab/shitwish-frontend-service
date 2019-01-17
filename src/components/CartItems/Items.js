import React from "react";
import Item from "./Item/Item"
import classes from "./Item/Item.css";


const Items = (props) => (
    props.items.map((item, index) => {
        return (
            <tr className={classes.Row}><Item name={item.name} price={item.price} key={item.id} src={item.img} click={() => props.clicked(index)} /></tr>
        )
})
);

export default Items;
