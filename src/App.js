

import React, { Component } from 'react';

import './App.css';
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";

class App extends Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClick = () => {
        console.log(this.state.sideDrawerOpen);
        this.setState({sideDrawerOpen: !this.state.sideDrawerOpen});
    }

    render() {
            return (
                <div style={{height: '100%'}}>
                    <NavBar drawerClickHandler={this.drawerToggleClick} />
                    <SideBar show={this.state.sideDrawerOpen} click={this.drawerToggleClick} />
                </div>
            );
        };
};

export default App;