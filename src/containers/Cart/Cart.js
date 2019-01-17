import React, {Component} from 'react';
import Items from "./Items/Items";
import axios from "axios";

const ZUULip = "192.168.160.182";
const removeUrlBase = "http://" + ZUULip + ":8762/cart-service/removeItem?buyerId=";
const itemUrlPart = "&itemId=";
const getItemsUrl = "http://" + ZUULip + ":8762/cart-service/cartitems?buyerId=1";
// const simpleItemUrl = "http://" + ZUULip + ":8762/item-service/items";

class Cart extends Component {

    state = {
        totalPrice: 0,
        items: [],
    };

    componentDidMount() {
        axios.get(getItemsUrl)
            .then(response => {
                console.log("getting data: " + response.data);
                this.setState({items: response.data});
                this.getTotalPriceHandler();
            })
            .catch(error => {
                    console.log("Couldn't load items from cart: " + error)
                }
            )
    }

    getTotalPriceHandler = () => {
        let totalPrice = 0;
        this.state.items.map(item => {
            console.log(item);
            totalPrice += item.price;
        })
        this.setState({totalPrice: totalPrice})
    }

    removeItemHandler = (index) => {
        let oldState = {...this.state}
        axios.delete(removeUrlBase + 1 /*==userId*/ + itemUrlPart + index)
            .then(response => {
                oldState = {...oldState.items.splice(index, 1)};
                this.setState({...oldState})
                this.getTotalPriceHandler()
            })
            .catch(error => {
                    console.log("Removing item failed: " + error)
                }
            );
    }


    render() {

        return (
            <div>
                <p>Your cart:</p>
                {this.state.items ? <Items items={this.state.items} clicked={this.removeItemHandler}/> : <p>No items in cart yet.</p>}
                <p>TOTAL: {this.state.totalPrice}$</p>
                <button>Proceed to payment</button>
            </div>
        );
    }
}

/*
* [
            {
                id: 1,
                name: "1111",
                price: 9.99
            },
            {
                id: 2,
                name: "2222",
                price: 9.99
            },
            {
                id: 3,
                name: "3333",
                price: 1.22
            }, {
                id: 4,
                name: "4444",
                price: 9.99
            }
        ]
* */

export default Cart;