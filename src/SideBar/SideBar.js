import React from 'react';
import "./SideBar.css";

const sideDrawer = props =>{
    console.log(props);
    let sidebarClass = 'side-bar';
    if(props.show){
        sidebarClass = 'side-bar open';
    }
    return (
        <nav className={sidebarClass}>
            <ul>
                <li><a>SEA</a></li>
                <li><a>DESERT</a></li>
                <li><a>FOREST</a></li>
                <li><a>CITY</a></li>
                <li id="back" onClick={props.click}>Back</li>
            </ul>
        </nav>
    );
};
export default sideDrawer;