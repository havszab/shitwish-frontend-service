import React, {Component} from 'react';
import './SellItem.css';
import axios from "axios";
import {Link} from "react-router-dom";

const postItemUrl = "https://shitwish-zuul.azurewebsites.net/item-service/items";


class SellItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            img: "",
            name: "",
            price: 0,
            sellerId: 0,
        }
    }


    handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        console.log(name);
        console.log(this.state);
        this.setState({
            [name]: value
        });
    }


    itemPostHandler = (index) => {
        console.log(this.state)
        axios.post(postItemUrl, this.state)
            .catch(error => {
                    console.log("Posting item failed: " + error)
                }
            );
    }


    render() {
        return (
            <div>
                <h1>Post an item to sell</h1>
                <form action='/'>
                    <p>Item details</p>
                    <input name="name"
                           id="name"
                           placeholder="Item name"
                           required
                           onChange={this.handleChange}></input>
                    <input name="price"
                           id="price"
                           placeholder="Price"
                           required
                           onChange={this.handleChange}></input>
                    <input name="description"
                           id="description"
                           placeholder="Description"
                           required
                           onChange={this.handleChange}></input>
                    <input name="img"
                           id="img"
                           placeholder="Picture URL"
                           required
                           onChange={this.handleChange}></input>
                    <button onClick={this.itemPostHandler}>Submit</button>
                </form>

            </div>
        );
    }
}

export default SellItem;