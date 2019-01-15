import React, {Component} from 'react';
import Items from "./Items/Items";
import axios from "axios";

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

    componentDidMount() {
        axios.get("cartserviceurl/userId/Items")
            .then(response => {
                this.setState({items: response.data})
        })
    }

    getTotalPriceHandler = () => {
        let totalPrice = 0;
        this.state.items.map(item => {
            totalPrice += item.price;
        })
        return totalPrice;
    }

    removeItemHandler = (index) => {
        let oldState = { ...this.state };
        axios.delete("cartserviceurl/userId/itemIndex")
            .then(response => {
                oldState = oldState.items.remove(index);
                this.setState({ ...oldState })
            })
    }

    render() {

        return (
            <div>
                <Items items={this.state.items} clicked={this.removeItemHandler}/>
                <p>TOTAL: {this.getTotalPriceHandler}</p>
                <button>Proceed to payment</button>
            </div>
        );
    }
}

export default Cart;