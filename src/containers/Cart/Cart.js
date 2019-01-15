import React, {Component} from 'react';
import Items from "./Items/Items";

class Cart extends Component {

    state = {
        items: [
            {
                id: 1,
                name: "some item",
                price: 9.99
            }
        ]
    };

    getTotalPriceHandler = () => {
        let totalPrice = 0;
        this.state.items.map(item => {
            totalPrice += item.price;
        })
        return totalPrice;
    }

    render() {

        return (
            <div>
                <Items items={this.state.items}/>
                <p>TOTAL: {this.getTotalPriceHandler}</p>
            </div>
        );
    }
}

export default Cart;