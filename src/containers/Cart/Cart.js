import React, {Component} from 'react';
import Items from "../../components/CartItems/Items";
import axios from "axios";
import {Link} from 'react-router-dom';
import classes from "./Cart.css"

const ZUULserviceURL = "http://192.168.160.139:8762";
const removeUrlBase = ZUULserviceURL + "/cart-service/removeItem?buyerId=";
const itemUrlPart = "&itemId=";
const getItemsUrl = ZUULserviceURL + "/cart-service/cartitems?buyerId=";

class Cart extends Component {

    state = {
        userId: 3,
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
        let oldState = {...this.state};
        const url = removeUrlBase + this.state.userId + itemUrlPart + index;
        console.log(index);
        axios.delete(url)
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
                <h1>Your cart</h1>
                {this.state.items || this.state.items.length === 0 ?
                    <table><Items items={this.state.items} clicked={this.removeItemHandler}/></table>  :
                    <p>No items in cart yet.</p>}
                <p>TOTAL: {this.state.totalPrice}$</p>
                <button className={classes.SubmitButton}><Link to="/payment">Proceed to payment</Link></button>
            </div>
        );
    }
}

export default Cart;