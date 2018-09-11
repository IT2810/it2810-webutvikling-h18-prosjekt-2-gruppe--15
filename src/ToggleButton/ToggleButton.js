import React from 'react';
import './ToggleButton.css';

const toggleButton = props => (
    <button className="toggleButton" onClick={props.click}>
        <div className="toggleButtonClass"></div>
        <div className="toggleButtonClass"></div>
        <div className="toggleButtonClass"></div>
    </button>
);
export default toggleButton;
