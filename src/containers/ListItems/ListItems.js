import React, {Component} from 'react';

import axios from 'axios';
import Items from '../../components/ListItem/Items/Items';
import Item from '../../components/ListItem/Items/Item/Item';

const ZUULip = "http://192.168.163.144:8762";
const addUrlBase = ZUULip + "/cart-service/itemToCart?buyerId=1&itemId=1";
const simpleItemUrl = ZUULip + "/item-service/items";

class ListItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            error : null,
        };
    }


    componentDidMount(){
        axios.get(simpleItemUrl)
            .then(response =>{
             console.log(response.data);
             this.setState({ data: response.data })
            })
            .catch(error => this.setState({ error: error }));
    }


    addToCartHandler=()=>{
      axios.post(addUrlBase)
          .then(response =>{
            this.setState({ data: response.data })
            })
          .catch(error => this.setState({ error: error }));
    };



    render(){
        let items = this.state.data.map(item => item.available ? (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            img={item.img}
                            sellerId={item.sellerId}
                            uploadDate={item.uploadDate}
                            />)
                        : null);

        return (
            <Items addToCart={this.addToCartHandler}>
                {items}
            </Items>
        );
    }
}

// {
//     "id": 1,
//     "name": "Stick",
//     "price": 100,
//     "available": true,
//     "img": "https://vignette.wikia.nocookie.net/tokipona/images/a/aa/Stick.png/revision/latest?cb=20171120043817",
//     "uploadDate": "2019-01-15",
//     "sellerId": 1
// },
// {
//     "id": 2,
//     "name": "Shit",
//     "price": 1500,
//     "available": true,
//     "img": "https://http2.mlstatic.com/almofada-emoticon-emoji-cocozinho-pou-grande-40x40-whatsapp-D_NQ_NP_635411-MLB20557478677_012016-F.jpg",
//     "uploadDate": "2019-01-15",
//     "sellerId": 2
// },
// {
//     "id": 3,
//     "name": "Trash",
//     "price": 1300,
//     "available": true,
//     "img": "https://toppng.com/public/uploads/preview/trash-can-11530995314kgh8pawz8u.png",
//     "uploadDate": "2019-01-15",
//     "sellerId": 1
// },
// {
//     "id": 4,
//     "name": "Wonder Woman",
//     "price": 0,
//     "available": true,
//     "img": "https://www.clipartmax.com/png/middle/195-1951557_wonder-woman-png-edit-justice-league-by-bp251-wonder-woman-gal-gadot.png",
//     "uploadDate": "2019-01-15",
//     "sellerId": 1
// },
// {
//     "id": 5,
//     "name": "Little boy",
//     "price": 99,
//     "available": true,
//     "img": "https://clipart.info/images/ccovers/1496252513Justin-Bieber-PNG-Picture-2017.png",
//     "uploadDate": "2019-01-15",
//     "sellerId": 2
// }
export default ListItems;