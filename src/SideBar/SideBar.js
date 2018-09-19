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
            {props.children}
        </nav>
    );
};
export default sideDrawer;