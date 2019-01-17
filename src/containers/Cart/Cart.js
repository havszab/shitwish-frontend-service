import React, {Component} from 'react';
import Items from "../../components/Items/Items";
import axios from "axios";
import {Link} from 'react-router-dom';

const ip = "http://192.168.160.178:8762";
const ZUULserviceURL = "https://shitwish-zuul.azurewebsites.net";
const removeUrlBase = ZUULserviceURL + "/cart-service/removeItem?buyerId=";
const itemUrlPart = ZUULserviceURL + "&itemId=";
const getItemsUrl = ip + "/cart-service/cartitems?buyerId=";
//const simpleItemUrl = ZUULserviceURL + "/item-service/items";

class Cart extends Component {

    state = {
        userId: 1,
        totalPrice: 0,
        items: []
    };

    componentDidMount() {
        axios.get(getItemsUrl + this.state.userId)
            .then(response => {
                console.log("getting data: " + response.data);
                console.log(this.state);
                this.setState({items: response.data});
                this.getTotalPriceHandler();
            })
            .catch(error => {
                    console.log("Couldn't load cart items: " + error)
                }
            )
    }

    getTotalPriceHandler = () => {
        let totalPrice = 0;
        this.state.items.map(item => {
            return totalPrice += item.price;
        });
        this.setState({totalPrice: totalPrice})
    };

    removeItemHandler = (index) => {
        let oldState = {...this.state}
        console.log(index)
        axios.delete(removeUrlBase + this.state.userId + itemUrlPart + index)
            .then(response => {
                oldState = {...oldState.items.splice(index, 1)};
                this.setState({...oldState})
                this.getTotalPriceHandler()
            })
            .catch(error => {
                    console.log("Removing item from cart failed: " + error)
                }
            );
    };

    render() {

        return (
            <div>
                <p>Your cart:</p>
                {this.state.items || this.state.items.length === 0 ? <Items items={this.state.items} clicked={this.removeItemHandler}/> :
                    <p>No items in cart yet.</p>}
                <p>TOTAL: {this.state.totalPrice}$</p>
                <button><Link to="/payment">Proceed to payment</Link></button>
            </div>
        );
    }
}

export default Cart;