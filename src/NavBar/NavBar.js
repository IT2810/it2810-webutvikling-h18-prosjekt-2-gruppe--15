import React, {Component} from 'react';
import './NavBar.css';
import ToggleButton from "../ToggleButton/ToggleButton";
 /*
 Needed methods in navbar - made it a class instead.


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
                    {this.props.keys.map(catKey =>
                        <li><a key={catKey} onClick={(e) => this.useCallback({newKey: catKey})}> { catKey } </a></li>)}
                    <li><a>SEA</a></li>
                    <li><a>DESERT</a></li>
                    <li><a>RAIN</a></li>
                </ul>
            </div>
        </nav>
    </header>
); */

class NavBar extends Component{
    render() {
        return (
            <header className="navbar">
                <nav className="navbar-nav">
                    <div>
                        <ToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                    <div className="navbar-home"></div>
                    <div className="spacer"></div>
                    <div className="navbar-items">
                        <ul>
                            {this.props.keys.map(catKey =>
                                <li key={"li" + catKey}><a key={catKey}
                                       onClick={(e) => this.useCallback({catKey})}> {(catKey).toUpperCase()}
                                </a></li>)}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }

    useCallback(e){
        this.props.callback(e);
    }
}

export default NavBar;
