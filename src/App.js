import React, { Component } from 'react';

import './App.css';

import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import ContainerComponent from './Containers/ContainerComponent';
import ImageController from './SideBar/ImageController';
import PoemController from './SideBar/PoemController';
import Data from "./urls";
import Mp3Controller from "./media/Mp3Controller";

class App extends Component {
    constructor(props) {
        super(props);

        //Set default data:
        this.state = {key: "rain", svgKey: "Happy Rain", audioKey: "Pouring rain", poemKey: "Raining", data: Data, sideDrawerOpen: false};
        this.changeSvgKey = this.changeSvgKey.bind(this);
        this.changeAudiokey = this.changeAudiokey.bind(this);
        this.drawerToggleClick = this.drawerToggleClick.bind(this);
        this.changePoemKey = this.changePoemKey.bind(this);
        this.changeCategoryKey = this.changeCategoryKey.bind(this);
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
                    <NavBar drawerClickHandler={this.drawerToggleClick} callback={(e) => this.changeCategoryKey(e)}
                            keys={Object.keys(this.state.data)}/>
                    <SideBar show={this.state.sideDrawerOpen} click={this.drawerToggleClick}>
                        <ImageController callback={(e) => this.changeSvgKey(e)}
                            SvgKeys={Data[this.state.key].svgUrl}/>
                        <PoemController callback={(e) => this.changePoemKey(e)}
                            PoemKeys={Data[this.state.key].poemUrl}/>
                    <Mp3Controller callback={(e) => this.changeAudiokey(e)}
                            audiokeys={Data[this.state.key].mp3Url}/>
                    <h2 onClick={() => this.drawerToggleClick()}> Hide </h2>
                    </SideBar>
              </div>
              {/*Replaces the div-placeholder from earlier versions. Keep the SVGImageContainer.
                -Jonas */}
              <ContainerComponent onClick={() => this.drawerToggleClick()}
                                  data={this.state.data} categoryKey={this.state.key} poemKey={this.state.poemKey} svgKey={this.state.svgKey} audioKey={this.state.audioKey}/>
          </main>
          {/*<footer>
              <p>vakker footer</p>
          </footer>*/}

      </div>
    );
  }

  changePoemKey(e){
    try{
        let newPoemKey = e["title"];
        console.log(newPoemKey);
        this.setState({
            ...this.state,
            poemKey: newPoemKey
        });
    }catch (e) {
        console.log(e);
        }
    }

    changeSvgKey(e) {
        try {
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


  changeCategoryKey(e){
        try{
            let newKey = e["catKey"];
            let data = this.state.data[newKey];
            let newSvgKey = Object.keys(data["svgUrl"])[0];
            let newPoemKey = Object.keys(data["poemUrl"])[0];
            this.setState({
                ...this.state,
                key: newKey,
                svgKey: newSvgKey,
                poemKey: newPoemKey
            });
            console.log(this.state);

        }
        catch (e) {
            console.log(e);
        }
    }

    changeAudiokey(e)
    {
        console.log(e);
        console.log("før bytte:" + this.state.audioKey);
        try {
            let newAudiokey = e;
            this.setState({
                ...this.state,
                audioKey: newAudiokey
            });
            console.log("etter bytte:" + this.state.audioKey);
        } catch (e) {
            console.log(e);
        }
    }
    drawerToggleClick(){
        try{
            let currentState = this.state.sideDrawerOpen;
            this.setState({
                ...this.state,
                sideDrawerOpen: !currentState
            });
        }catch (e) {
            console.log(e);
        }
    }
}

export default App;