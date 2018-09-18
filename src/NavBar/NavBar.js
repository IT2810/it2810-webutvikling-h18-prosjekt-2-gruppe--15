import React from 'react';
import './NavBar.css';
import ToggleButton from "../ToggleButton/ToggleButton";

const navBar = props =>(
    <header className="navbar">
        <nav className="navbar-nav">
            <div>
                <ToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="navbar-home"></div>
            <div className="spacer"></div>
            <div className="navbar-items">
                <ul>
                    <li><a>SEA</a></li>
                    <li><a>DESERT</a></li>
                    <li><a>FOREST</a></li>
                    <li><a>CITY</a></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default navBar;
