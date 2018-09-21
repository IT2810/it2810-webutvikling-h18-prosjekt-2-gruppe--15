import React from 'react';
import "./SideBar.css";

const sideDrawer = props =>{
    /* prop for å sjekke om den er åpen eller ikke, og endrer className for å endre på css. */
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
