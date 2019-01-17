import React from 'react';

import classes from './FooterItems.css';
import FooterItem from '../FooterItem/FooterItem';


const footerItems = () => (
    <ul className={classes.FooterItems}>
        <FooterItem> About us</FooterItem>
        <FooterItem> Privacy & Terms</FooterItem>
        <FooterItem> Contact</FooterItem>
        <FooterItem> Help & Support</FooterItem>
    </ul>
);

export default footerItems;