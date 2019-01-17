import React, {Component} from 'react';
import './SellItem.css';
import axios from "axios";
import classes from "./SellItem.css"

const postItemUrl = "http://192.168.160.139:8762/item-service/items";


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
    };


    itemPostHandler = () => {
        console.log(this.state);
        axios.post(postItemUrl, this.state)
            .catch(error => {
                    console.log("Posting item failed: " + error)
                }
            );
        console.log("post request sent");
    };


    render() {
        return (
            <div>
                <h1>Post an item to sell</h1>
                <form>
                    <p>Item details</p>
                    <input name="name"
                           id="name"
                           placeholder="Item name"
                           required
                           onChange={this.handleChange}/>
                    <input name="price"
                           id="price"
                           placeholder="Price"
                           required
                           onChange={this.handleChange}/>
                    <input name="description"
                           id="description"
                           placeholder="Description"
                           required
                           onChange={this.handleChange}/>
                    <input name="img"
                           id="img"
                           placeholder="Picture URL"
                           required
                           onChange={this.handleChange}/>
                    <p onClick={this.itemPostHandler}>Submit</p>
                </form>

            </div>
        );
    }
}

export default SellItem;