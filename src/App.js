
import React, { Component } from 'react';

import './App.css';

import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import ImageController from './SideBar/ImageController';
import ContainerComponent from './ContainerComponent';
import Data from "./urls";

class App extends Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClick = () => {
    console.log(this.state.sideDrawerOpen);
    this.setState({sideDrawerOpen: !this.state.sideDrawerOpen});
}
    constructor(props){
        super(props);
        //console.log(urlData);
        this.state = {key: "rain", svgKey: "Happy Rain", audioKey: 0, poemKey: 0, data: Data};
        this.changeSvgKey = this.changeSvgKey.bind(this);
    }

  render() {
    return (
      <div className="App">
          <header className="App-header">
              <h1 className="App-title">Prosjekt 2</h1>
              <h3 className="App-undertitle">IT2810</h3>
          </header>
          <main>
              <div id="nav">
                  {/*nav bar */}
                    <NavBar drawerClickHandler={this.drawerToggleClick} />
                    <SideBar show={this.state.sideDrawerOpen} click={this.drawerToggleClick}>
                        <ImageController callback={(e) => this.changeSvgKey(e)}
                            SvgKeys={Data[this.state.key].svgUrl}/>
                    </SideBar>
              </div>
              {/*Replaces the div-placeholder from earlier versions. Keep the SVGImageContainer.
                -Jonas */}
              <ContainerComponent data={this.state.data} svgKey={this.state.svgKey} />
          </main>
          {/*<footer>
              <p>vakker footer</p>
          </footer>*/}

      </div>
    );
  }
  changeSvgKey(e){
      try{
          let newSvgKey = e["title"];
          this.setState({
              ...this.state,
          svgKey: newSvgKey
          });
        }
        catch (e) {
            console.log(e);
        }
  }

}

export default App;