import React from "react";
import Item from "./Item/Item"


const Items = (props) => (
    props.items.map((item, index) => {
        return (
            <Item name={item.name} price={item.price} key={item.id} src={item.img} click={() => props.clicked(index)} />
        )
})
);

export default Items;
