import React, {Component} from 'react';
import './SellItem.css';


class SellItem extends Component {
    render() {
        return (
            <div>
                <h1>Post an item to sell</h1>
                <form>
                    <p>Item details</p>
                    <input type="text" name="item_name" id="item_name" placeholder="Item name"></input>
                    <input type="text" name="item_price" id="item_price" placeholder="Price"></input>
                    <input type="text" name="item_description" id="item_description" placeholder="Description"></input>
                    <input type="text" name="item_picture" id="item_picture" placeholder="Picture URL"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default SellItem;