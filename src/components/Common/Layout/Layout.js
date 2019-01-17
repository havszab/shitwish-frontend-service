import React, {Component, Fragment} from 'react';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer'
import classes from './Layout.css';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <main className={classes.Main}>
                    {this.props.children}
                </main>
                <Footer/>
            </Fragment>
        );
    }
}

export default Layout;