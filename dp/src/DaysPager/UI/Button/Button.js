import React from 'react';
import './Button.css';

const button = (props) => {
    let classes = ['Button', props.classStyle ].join(' ');
    return(
        <button
            onClick = {props.click}
            className = {classes}>
            {props.children}
        </button>
    );
}
export default button;
