import React, {Component} from 'react';
import Items from "../../components/Items/Items";
import axios from "axios";
import {Link} from 'react-router-dom';


const ZUULip = "192.168.160.182";
const removeUrlBase = "http://" + ZUULip + ":8762/cart-service/removeItem?buyerId=";
const itemUrlPart = "&itemId=";
//const getItemsUrl = "http://" + ZUULip + ":8762/cart-service/cartitems?buyerId=";
const simpleItemUrl = "http://" + ZUULip + ":8762/item-service/items";

class Cart extends Component {

    state = {
        totalPrice: 0,
        items: [{
            available: true,
            description: "A stick",
            id: 1,
            img: "https://vignette.wikia.nocookie.net/tokipona/images/a/aa/Stick.png/revision/latest?cb=20171120043817",
            name: "Stick",
            price: 100
        },
            {
                id: 3,
                name: "Trash",
                description: "Everywhere",
                img: "https://vignette.wikia.nocookie.net/tokipona/images/a/aa/Stick.png/revision/latest?cb=20171120043817",
                price: 1300,
                available: true
            }]
    };

    componentDidMount() {
        axios.get(simpleItemUrl)
            .then(response => {
                console.log("getting data: " + response.data);
                console.log(this.state)
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
        axios.delete(removeUrlBase + 1 /*==userId*/ + itemUrlPart + index)
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
                {this.state.items ? <Items items={this.state.items} clicked={this.removeItemHandler}/> :
                    <p>No items in cart yet.</p>}
                <p>TOTAL: {this.state.totalPrice}$</p>
                <button><Link to="/payment">Proceed to payment</Link></button>
            </div>
        );
    }
}

export default Cart;