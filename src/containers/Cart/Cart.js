import React, {Component} from 'react';
import Items from "../../components/Items/Items";
import axios from "axios";
import {Link} from 'react-router-dom';


const ZUULserviceURL = "https://shitwish-zuul.azurewebsites.net";
const removeUrlBase = "/cart-service/removeItem?buyerId=";
const itemUrlPart = "&itemId=";
//const getItemsUrl = "/cart-service/cartitems?buyerId=";
const simpleItemUrl = "/item-service/items";

class Cart extends Component {

    state = {
        totalPrice: 0,
        items: [
            {
                "id": 1,
                "name": "Stick",
                "price": 100,
                "available": true,
                "img": "https://vignette.wikia.nocookie.net/tokipona/images/a/aa/Stick.png/revision/latest?cb=20171120043817",
                "uploadDate": "2019-01-15",
                "sellerId": 1
            },
            {
                "id": 2,
                "name": "Shit",
                "price": 1500,
                "available": true,
                "img": "https://http2.mlstatic.com/almofada-emoticon-emoji-cocozinho-pou-grande-40x40-whatsapp-D_NQ_NP_635411-MLB20557478677_012016-F.jpg",
                "uploadDate": "2019-01-15",
                "sellerId": 2
            },
            {
                "id": 3,
                "name": "Trash",
                "price": 1300,
                "available": true,
                "img": "https://toppng.com/public/uploads/preview/trash-can-11530995314kgh8pawz8u.png",
                "uploadDate": "2019-01-15",
                "sellerId": 1
            },
            {
                "id": 4,
                "name": "Wonder Woman",
                "price": 10001,
                "available": true,
                "img": "https://www.clipartmax.com/png/middle/195-1951557_wonder-woman-png-edit-justice-league-by-bp251-wonder-woman-gal-gadot.png",
                "uploadDate": "2019-01-15",
                "sellerId": 1
            },
            {
                "id": 5,
                "name": "Little boy",
                "price": 99,
                "available": true,
                "img": "https://clipart.info/images/ccovers/1496252513Justin-Bieber-PNG-Picture-2017.png",
                "uploadDate": "2019-01-15",
                "sellerId": 2
            }
        ]
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