import React, {Component, Fragment} from 'react';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer'


class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <main >
                    {this.props.children}
                </main>
                <Footer/>
            </Fragment>
        );
    }
}

export default Layout;