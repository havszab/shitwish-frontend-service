import React from 'react';

import classes from './Button.css';

const button = (props) => {
    return (
        <div className={[classes.Button, props.type].join(" ")} onClick={props.clicked}>
            <div>{props.text}</div>
        </div>
    );
};

export default button;
