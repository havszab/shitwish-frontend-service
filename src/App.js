import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Layout from './components/Common/Layout/Layout';
import ListItems from './containers/ListItems/ListItems';
import Cart from './containers/Cart/Cart';
import SellItems from './containers/SellItem/SellItem';
import NoPageFound from './containers/NoPageFound/NoPageFound';
import PaymentInfoForm from "./components/Payment/PaymentInfoForm";


class App extends Component {


    render() {
        return (

            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" render={() => <ListItems/>}/>
                        <Route exact path="/cart" render={() => <Cart/>}/>
                        <Route exact path="/sell-item" render={() => <SellItems/>}/>
                        <Route exact path="/payment" render={() => <PaymentInfoForm/>}/>
                        <Route component={NoPageFound}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
