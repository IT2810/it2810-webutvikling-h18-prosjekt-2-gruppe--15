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
        //Set default data to fully random values
        let defCategory  = App.getRandomKey(Data);

        //Gets random value from a random subset of Data
        let defSvgUrl = App.getRandomValue(Data[App.getRandomKey(Data)].svgUrl);
        let defAudioUrl = App.getRandomValue(Data[App.getRandomKey(Data)].audioUrl);
        let defPoemUrl = App.getRandomValue(Data[App.getRandomKey(Data)].poemUrl);

        //Set default state
        this.state = {key: defCategory, svgUrl: defSvgUrl, audioUrl: defAudioUrl, poemUrl: defPoemUrl, data: Data, sideDrawerOpen: false};

        this.drawerToggleClick = this.drawerToggleClick.bind(this);
        this.changeSvgUrl = this.changeSvgUrl.bind(this);
        this.changeAudioUrl = this.changeAudioUrl.bind(this);
        this.drawerToggleClick = this.drawerToggleClick.bind(this);
        this.changePoemUrl = this.changePoemUrl.bind(this);
        this.changeCategoryKey = this.changeCategoryKey.bind(this);
    }

  render() {
    return (
      <div className="App">
          <header className="App-header">
              <h1 className="App-title">Prosjekt 2</h1>
              <h3 className="App-undertitle">IT2810 - Gruppe 15</h3>
          </header>
          <main>
              <div id="nav">
                  {/*
                  Navbar and sidedrawer:
                  */}
                    <NavBar drawerClickHandler={this.drawerToggleClick} callback={(e) => this.changeCategoryKey(e)}
                            keys={Object.keys(this.state.data)}/>
                    <SideBar show={this.state.sideDrawerOpen} click={this.drawerToggleClick}>
                        <ImageController callback={(e) => this.changeSvgUrl(e)}
                                         SvgKeys={Data[this.state.key].svgUrl}/>
                        <PoemController callback={(e) => this.changePoemUrl(e)}
                                        PoemKeys={Data[this.state.key].poemUrl}/>
                    <Mp3Controller callback={(e) => this.changeAudioUrl(e)}
                                   audiokeys={Data[this.state.key].audioUrl}/>
                    <h2 onClick={() => this.drawerToggleClick()}> Hide </h2>
                    </SideBar>
              </div>
              <ContainerComponent onClick={() => this.drawerToggleClick()}
                                  data={this.state.data}
                                  categoryKey={this.state.key}
                                  poemUrl={this.state.poemUrl}
                                  svgUrl={this.state.svgUrl}
                                  audioUrl={this.state.audioUrl}/>
          </main>

      </div>
    );
  }


    //Changes URL for category in sidedraer
    changeCategoryKey(e){
        try{
            let newKey = e["catKey"];
            this.setState({
                ...this.state,
                key: newKey,
            });

        }
        catch (e) {
            console.log(e);
        }
    }

  //Changes URL for poems
  changePoemUrl(e){
    try{
        let newPoemKey = this.state.data[this.state.key].poemUrl[e["title"]];
        console.log(newPoemKey);
        this.setState({
            ...this.state,
            poemUrl: newPoemKey
        });
    }catch (e) {
        console.log(e);
        }
    }

    //Changes URL for SVG
    changeSvgUrl(e) {
        try {
            let newSvgKey = this.state.data[this.state.key].svgUrl[e["title"]];
            this.setState({
                ...this.state,
                svgUrl: newSvgKey
            });
        }
        catch (e) {
            console.log(e);
        }
    }


    //Changes URL for audio
    changeAudioUrl(e)
    {
        try {
            let newAudiokey = this.state.data[this.state.key].audioUrl[e];
            this.setState({
                ...this.state,
                audioUrl: newAudiokey
            });
        } catch (e) {
            console.log(e);
        }
    }

    //Toggles display of sidedrawer
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

    //Find a random value in a key-value pair {"key": value}
    static getRandomValue(keyValuePair){
        let size = Object.keys(keyValuePair).length;
        let randomIndex = Math.floor(Math.random() * size);
        return keyValuePair[Object.keys(keyValuePair)[randomIndex]];
    }

    //Finds a random key in key-value pair.
    static getRandomKey(item){
        let size = Object.keys(item).length;
        let randomIndex = Math.floor(Math.random() * size);
        return Object.keys(item)[randomIndex];
    }
}

export default App;