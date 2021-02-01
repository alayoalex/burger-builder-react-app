import React from 'react';

import './Button.css'

const addClasses = (args) => {
    let classes = ['Button'];
    if (args.btnType === 'Danger')
        classes.push('Danger')
    else
        classes.push('Success')
    return classes.join(' ');
}

const button = (props) => (
    <button 
        className={addClasses(props)}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;