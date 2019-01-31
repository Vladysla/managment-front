import React from 'react';

import './style.css'

const Hamburger = props => {
    return (
        <div onClick={props.onClick} className={`hamburger hamburger--elastic ${props.active && 'is-active'}`}>
            <div className="hamburger-box">
                <div className="hamburger-inner"/>
            </div>
        </div>
    );
};

export default Hamburger;